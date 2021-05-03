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
    let artwork = {};
    if (req.params.type === "all") {
      artwork = await Artwork.find();
    } else {
      artwork = await Artwork.find({ type: req.params.type.toUpperCase() });
    }
    res.send(artwork);
  });
};
