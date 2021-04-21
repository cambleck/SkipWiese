const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const cleanCache = require("../middlewares/cleanCache");

const Artwork = mongoose.model("Artwork");

module.exports = (app) => {
  app.get("/api/artwork/a/:id", async (req, res) => {
    const artwork = await Artwork.findOne({
      _id: req.params.id,
    });
    res.send(artwork);
  });
  app.get("/api/artwork/s/:type", async (req, res) => {
    console.log(req.params.type, "THIS IS A CONSOLE.LOG");
    let artwork = {};
    if (req.params.type === "all") {
      artwork = await Artwork.find();
    } else {
      artwork = await Artwork.find({ type: req.params.type.toUpperCase() });
    }
    console.log(artwork);
    res.send(artwork);
  });

  app.post("/api/artwork", cleanCache, async (req, res) => {
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
      res.send(artwork);
    } catch (err) {
      res.send(400, err);
    }
  });
};
