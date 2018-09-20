var db = require("../models");

module.exports = function(app, passport) {
  // Load index page
/*   app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });
 */
  // Load example page and pass in an example by id
/*   app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });
 */
  app.get("/", function(req, res) {
    res.render("index", { user: req.user });
  });

  app.get("/products", function(req, res) {
      res.render("products");
  });

  app.get("/products_backup", function(req, res) {
    db.Products.findAll({}).then(function(Products) {
      res.render("products_backup", { products: Products });
    });
  });

  app.get("/order", function(req, res) {
    db.Products.findAll({}).then(function(Products) {
      res.render("order", { products: Products });
    });
  });

  app.get("/login", function(req, res) {
    res.render("login");
  });
  
  app.post("/login", passport.authenticate("local", { failureRedirect: "/login" }), function(req, res) {
    res.redirect("/admin");
  });
  
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });
  
  app.get("/admin", require("connect-ensure-login").ensureLoggedIn(), function(req, res) {
    db.Products.findAll({}).then(function(Products) {
      res.render("admin", { user: req.user, products: Products });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
