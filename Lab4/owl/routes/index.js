var express = require('express');
var router = express.Router();
var request = require("request");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/dictionary', function(req, res, next) {
    var url = "https://owlbot.info/api/v1/dictionary/";
    url += req.query['q'];
    url += "?format=json";
    console.log(url);
    request(url).pipe(res);
});

module.exports = router;
