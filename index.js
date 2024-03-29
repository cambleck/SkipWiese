const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cookieSession = require("cookie-session");
const compression = require("compression");
const keys = require("./config/keys");
const bodyParser = require("body-parser");
require("./models/Artwork");
require("./models/User");
require("./services/passport");
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(compression());

app.use((req, res, next) => {
  next();
});

require("./routes/authRoutes")(app);
require("./routes/uploadRoutes")(app);
require("./routes/paymentRoutes")(app);
require("./routes/artworkRoutes")(app);

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static("client/build"));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
