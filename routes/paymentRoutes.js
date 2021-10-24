const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  console.log(items);
  var total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price;
  }
  return total * 100;
};

module.exports = (app) => {
  app.post("/api/create-payment-intent", async (req, res) => {
    const { items } = req.body;

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: "usd",
      payment_method_types: ["card"],
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });
  });

  app.post("/api/update-payment-intent", async (req, res) => {
    const { paymentIntentId, items } = req.body;

    const paymentIntent = await stripe.paymentIntents.update(paymentIntentId, {
      amount: calculateOrderAmount(items),
    });
    console.log(paymentIntent);
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  });
};
