var db = require("../models");

module.exports = function(app) {
  // Get all products from Products table
  app.get("/api/products/all", function(req, res) {
    db.Products.findAll({}).then(function(Products) {
      res.json(Products);
    });
  });

  // Create new product from the administrator page
  app.post("/api/products/new", function(req, res) {
    db.Products.create(req.body).then(function(Products) {
      res.json(Products);
    });
  });

  app.put("/api/products/update/:id", function(req, res) {
    db.Products.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(function(Products) {
      res.json(Products);
    });
  });

  // Delete an example by id
  app.delete("/api/products/delete/:id", function(req, res) {
    db.Products.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(Products) {
      res.json(Products);
    });
  });
};
