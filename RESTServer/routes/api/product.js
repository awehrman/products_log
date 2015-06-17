var mongoose = require('mongoose');
var Product = require('../../models/product');

module.exports.addProduct = function(req, res) {
  console.log(req.body.product);
  var product = new Product(req.body.product);
    product.save(function(err) {
      if (err) {
          res.send(err);
      }
      res.json({product: product});
    });
};

module.exports.getAllProducts = function(req, res) {
  Product.find(function(err, products) {
    if (err) {
      res.send(err);
    }
    res.json({products: products});
  });
};

module.exports.getSingleProduct = function(req, res, id) {
  Product.findById(id, function(err, product) {
    if (err) {
      res.send(err);
    }
    res.json({product: product});
  });
};

module.exports.updateProduct = function(req, res, id) {

  Product.findById(id, function(err, product) {
    if (err) {
      res.send(err);
    }
    else {
      product.name = req.body.product.name;
      product.brand = req.body.product.brand;
      product.size = req.body.product.size;
      product.sizeUnit = req.body.product.sizeUnit;
      product.price = req.body.product.price;
      product.inStock = req.body.product.inStock;
      product.image = req.body.product.image;
      product.category = req.body.product.category;
      product.logs = req.body.product.logs;

      product.save();
      res.json({product: product});
    }

  });
};

module.exports.deleteProduct = function(req, res, id) {
  Product.findByIdAndRemove(id, function(err) {
    if (err) {
      res.send(err);
    }
    res.sendStatus(200);
  })
};

module.exports.getProductsForLog = function(req, res, id) {
  Product.find({'logs': id}, function (err, products) {
    if (err) {
      res.send(err);
    }
    console.log(products);
    res.json(products);
  });
};