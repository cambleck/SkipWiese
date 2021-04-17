const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Artwork = mongoose.model("Artwork");

module.exports = (app) => {
  app.get("/api/artwork/:id", async (req, res) => {
    console.log(req.params.id);
    const artwork = await Artwork.findOne({
      _id: req.params.id,
    });
    console.log("route", artwork);
    res.send(artwork);
  });
  app.get("/api/artwork", async (req, res) => {
    const artwork = await Artwork.find();
    res.send(artwork);
  });

  app.post("/api/artwork", async (req, res) => {
    const { title, type, size, price, imageUrl } = req.body;

    const artwork = new Artwork({
      title,
      type,
      size,
      price,
      imageUrl,
    });

    try {
      await artwork.save();
      console.log("save");
      res.send(artwork);
    } catch (err) {
      res.send(400, err);
    }
  });
};
