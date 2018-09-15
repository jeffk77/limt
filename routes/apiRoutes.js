var db = require("../models");

module.exports = function(app) {
  // Get all products from Products table
  app.get("/products", function(req, res) {
    db.Products.findAll({}).then(function(Products) {
      res.json(Products);
    });
  });

  // Create new product from the administrator page
  app.post("/api/products", function(req, res) {
    db.Products.create(req.body).then(function(Products) {
      res.json(Products);
    });
  });

  app.post("/api/posts/:id", function(req, res) {
    db.faq.create(req.body).then(function(faq) {
      res.json(faq);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Products.destroy({ where: { id: req.params.id } }).then(function(Products) {
      res.json(Products);
    });
  });
};
