module.exports = (req, res, next) => {
  console.log(req);
  if (!req.user) {
    res.redirect("/login");
  }

  next();
};
