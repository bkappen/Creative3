var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Product = mongoose.model('Product');
mongoose.connect('mongodb://localhost/fullmeanstack', { useNewUrlParser: true });

var db = mongoose.connection; //Saves the connection as a variable to use
db.on('error', console.error.bind(console, 'connection error:')); //Checks for connection errors
db.once('open', function() { //Lets us know when we're connected
    console.log('Connected');
});

var Product = mongoose.model('Product');

//////Routes//////

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.param('product', function(req, res, next, id) {
  Product.findById(id, function (err, product){
    if (err) { return next(err); }
    if (!product) { return next(new Error("If a product is not in our database, it doesn't exist.")); }
    req.product = product;
    return next();
  });
});

router.get('/admin', function(req, res, next) {
  Product.find(function(err, products){
    if(err){ return next(err); }
    res.json(products);
    console.log("Admin get route.");
  });
});

router.post('/admin', function(req, res, next) {
  var product = new Product(req.body);
  product.save(function(err, product){
    if(err){ return next(err); }
    res.json(product);
  });
});

router.delete('/admin:product', function(req, res) {
  console.log("Admin delete route");
  req.product.remove();
  res.sendStatus(200);
});

router.get('/customer', function(req, res, next) {
  Product.find(function(err, products){
    if(err){ return next(err); }
    res.json(products);
    console.log("Customer get route.");
  });
});

router.put('/customer:product/order', function(req, res, next) {
  req.product.order(function(err, product){
    if (err) { return next(err); }
    res.json(product);
    console.log("IN ORDER");
  });
});

module.exports = router;
