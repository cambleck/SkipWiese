const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);

const DOMAIN = "http://localhost:3000/checkout";

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

module.exports = (app) => {
  app.post("/create-payment-intent", async (req, res) => {
    const { items } = req.body;
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: "usd",
    });
    console.log(paymentIntent);
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  });
};
