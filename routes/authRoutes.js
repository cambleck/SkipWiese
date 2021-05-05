const passport = require("passport");

module.exports = (app) => {
  app.post("/api/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) {
        res.redirect("/_admin");
      } else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.redirect("/_admin");
        });
      }
      console.log(req.user);
    })(req, res, next);
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/user", (req, res) => {
    console.log(req.user, "2");
    res.send(req.user);
  });
};
