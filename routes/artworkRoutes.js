const mongoose = require("mongoose");
const aws = require("aws-sdk");
const requireLogin = require("../middlewares/requireLogin");
const keys = require("../config/keys");
const Artwork = mongoose.model("Artwork");

const s3 = new aws.S3({
  credentials: {
    accessKeyId: keys.accessKeyId,
    secretAccessKey: keys.secretAccessKey,
  },
  region: "us-east-2",
});

module.exports = (app) => {
  app.get("/api/artwork/a/:id", async (req, res) => {
    const artwork = await Artwork.findOne({
      _id: req.params.id,
    });
    res.send(artwork);
  });

  app.get("/api/artwork/s/listview", async (req, res) => {
    const artwork = await Artwork.find().sort({ title: 1 });

    res.send(artwork);
  });

  app.get("/api/artwork/delete/:key/:id", async (req, res) => {
    const asd = await Artwork.deleteOne({ _id: req.params.id })
      .then(function () {
        console.log("Data deleted"); // Success
      })
      .catch(function (error) {
        console.log(error); // Failure
      });

    s3.deleteObject(
      {
        Bucket: "skipwiese",
        Key: req.params.key,
      },
      function (err, data) {}
    );

    res.send("Deleted");
  });

  app.get("/api/artwork/s/:type/:pageNumber", async (req, res) => {
    let artwork = {};

    const limit = 7;
    const page = req.params.pageNumber;
    var count = 0;
    if (req.params.type === "all") {
      try {
        // execute query with page and limit values
        artwork = await Artwork.find()
          .sort({ title: 1 })
          .limit(limit * 1)

          .skip((page - 1) * limit)
          .exec();

        // get total documents in the Posts collection
        count = await Artwork.countDocuments();

        // return response with posts, total pages, and current page
      } catch (err) {
        console.error(err.message);
      }
    } else {
      try {
        artwork = await Artwork.find({ type: req.params.type.toUpperCase() })
          .sort({ title: 1 })
          .limit(limit * 1)
          .skip((page - 1) * limit)
          .exec();

        // get total documents in the Posts collection
        count = await Artwork.countDocuments({
          type: req.params.type.toUpperCase(),
        });

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

  app.post("/api/artwork", requireLogin, async (req, res) => {
    const {
      title,
      type,
      width,
      height,
      description,
      imageUrl,
      typeLabel,
    } = req.body;
    const artwork = new Artwork({
      title,
      type,
      typeLabel,
      width,
      height,
      description,
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
