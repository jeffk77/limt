var db = require("../models");

module.exports = function(app, passport) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  app.get("/authex", function(req, res) {
    res.render("authex", { user: req.user });
  });
  
  app.get("/login", function(req, res) {
    res.render("login");
  });
  
  app.post("/login", passport.authenticate("local", { failureRedirect: "/login" }), function(req, res) {
    res.redirect("/authex");
  });
  
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/authex");
  });
  
  app.get("/secret", require("connect-ensure-login").ensureLoggedIn(), function(req, res) {
    res.render("secret", { user: req.user });
  });

  // Render 404 page for any unmatched routes
/*   app.get("*", function(req, res) {
    res.render("404");
  }); */
};
