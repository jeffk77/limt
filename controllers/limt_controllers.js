var express = require("express");
var Customization = require("../models/customization.js");
var Products = require("../models/products.js");
var FAQ = require("../models/faq.js");

var router = express.Router();

router.get("/products", function(req, res) {
  Products.selectAll(function (data) {
    var productshbs = {
      products: data
    };
    console.log(productshbs);
    res.render("products", productshbs);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne([
    "burger_name"
  ], [
    req.body.burger_name
  ], function (result) {
    res.redirect("/");
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({
    devoured: true
  },
    condition,
    function(result) {
    res.redirect("/");
  }
  );
});

module.exports = router;
