const aws = require("aws-sdk");
const uuid = require("uuid/v1");
const requireLogin = require("../middlewares/requireLogin");
const keys = require("../config/keys");

const s3 = new aws.S3({
  credentials: {
    accessKeyId: keys.accessKeyId,
    secretAccessKey: keys.secretAccessKey,
  },
  region: "us-east-2",
});
/*
TODO:
 if in edit mode
 use same uuid then add image
*/
module.exports = (app) => {
  app.get("/api/upload", (req, res) => {
    const key = `${uuid()}.jpeg`;

    s3.getSignedUrl(
      "putObject",
      {
        Bucket: "skipwiese",
        ContentType: "image/jpeg",
        Key: key,
      },
      (err, url) => res.send({ key, url })
    );
  });
};
