const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
// const cleanCache = require("../middlewares/cleanCache");

const Artwork = mongoose.model("Artwork");

module.exports = (app) => {
  app.get("/api/artwork/a/:id", async (req, res) => {
    const artwork = await Artwork.findOne({
      _id: req.params.id,
    });
    res.send(artwork);
  });
  app.get("/api/artwork/s/:type/:pageNumber", async (req, res) => {
    let artwork = {};
    console.log(req.params);
    const limit = 3;
    const page = req.params.pageNumber;
    var count = 0;
    if (req.params.type === "all") {
      try {
        // execute query with page and limit values
        artwork = await Artwork.find()
          .limit(limit * 1)
          .skip((page - 1) * limit)
          .exec();

        // get total documents in the Posts collection
        count = await Artwork.countDocuments();
        console.log(count, artwork);
        // return response with posts, total pages, and current page
      } catch (err) {
        console.error(err.message);
      }
    } else {
      try {
        artwork = await Artwork.find({ type: req.params.type.toUpperCase() })
          .limit(limit * 1)
          .skip((page - 1) * limit)
          .exec();

        // get total documents in the Posts collection
        count = await Artwork.countDocuments({
          type: req.params.type.toUpperCase(),
        });
        console.log(count, artwork);
        // return response with posts, total pages, and current page
      } catch (err) {
        console.error(err.message);
      }
    }
    res.send({
      artwork,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  });
};
