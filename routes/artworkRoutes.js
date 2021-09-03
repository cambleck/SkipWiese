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
    var noTitleArray = [];
    var artwork = await Artwork.find().sort({ title: 0 });

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

  app.get("/api/artwork/s/:type", async (req, res) => {
    let artwork = {};

    if (req.params.type === "all") {
      try {
        artwork = await Artwork.find().sort({ title: 0 });
      } catch (err) {
        console.error(err.message);
      }
    } else if (req.params.type === "featured") {
      try {
        artwork = await Artwork.find({
          isFeatured: true,
        }).sort({ title: 0 });

        // return response with posts, total pages, and current page
      } catch (err) {
        console.error(err.message);
      }
    } else {
      try {
        artwork = await Artwork.find({
          type: req.params.type.toUpperCase(),
        }).sort({ title: 0 });

        // return response with posts, total pages, and current page
      } catch (err) {
        console.error(err.message);
      }
    }
    res.send(artwork);
  });

  app.post("api/updateArtwork", requireLogin, async (req, res) => {
    console.log("UPDATEADMALSKDMLKM");
    const {
      title,
      type,
      width,
      height,
      description,
      imageUrl,
      typeLabel,
      isFeatured,
      urlString,
      _id,
    } = req.body;
    await Artwork.findOneAndUpdate(
      { id: _id },
      {
        title,
        type,
        typeLabel,
        width,
        height,
        description,
        imageUrl,
        isFeatured,
        urlString,
      }
    );

    try {
      await artwork.save();
      res.send(artwork);
    } catch (err) {
      res.send(400, err);
    }
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
      isFeatured,
      urlString,
    } = req.body;
    const artwork = new Artwork({
      title,
      type,
      typeLabel,
      width,
      height,
      description,
      imageUrl,
      isFeatured,
      urlString,
    });

    try {
      await artwork.save();
      res.send(artwork);
    } catch (err) {
      res.send(400, err);
    }
  });
};
