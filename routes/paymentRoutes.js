const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);

const DOMAIN = "http://localhost:3000/checkout";

module.exports = (app) => {
  app.post("/pay", async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // TODO: replace this with the `price` of the product you want to sell
          price: "{{PRICE_ID}}",
          quantity: 1,
        },
      ],
      payment_method_types: ["card"],
      mode: "payment",
      success_url: `${DOMAIN}?success=true`,
      cancel_url: `${DOMAIN}?canceled=true`,
    });
    res.redirect(303, session.url);
  });
};
