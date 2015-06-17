var express = require('express');
var router = express.Router();

var logs = require('./api/log');
var products = require('./api/product');

/* Logs routes */
router.route('/logs')
  .post(function(req,res) { logs.addLog(req,res) })
  .get(function(req,res) { logs.getAllLogs(req,res) });

/* Single log routes */
router.route('/logs/:log_id')
  .get(function(req, res) { logs.getSingleLog(req, res, req.params.log_id) })
  .put(function(req, res) { logs.updateLog(req, res, req.params.log_id) })
  .delete(function(req, res) { logs.deleteLog(req, res, req.params.log_id) });

/* Products routes */
router.route('/products')
  .post(function(req,res) { products.addProduct(req,res) })
  .get(function(req,res) { products.getAllProducts(req,res) });

router.route('/products/:product_id')
  .get(function(req, res) { products.getSingleProduct(req, res, req.params.product_id) })
  .put(function(req, res) { products.updateProduct(req, res, req.params.product_id) })
  .delete(function(req, res) { products.deleteProduct(req, res, req.params.product_id) });

//display all products for a given log
router.route('/products/logs/:log_id')
  .get(function(req, res) { products.getProductsForLog(req, res, req.params.log_id) });

module.exports = router;