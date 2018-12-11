var express = require('express');
var router = express.Router();

var mongoose = require('mongoose'); //Adds mongoose as a usable dependency

mongoose.connect('mongodb://localhost/commentDB', { useNewUrlParser: true }); //Connects to a mongo database called "commentDB"

var commentSchema = mongoose.Schema({ //Defines the Schema for this database
    Name: String,
    Comment: String
});

var Comment = mongoose.model('Comment', commentSchema); //Makes an object from that schema as a model

var db = mongoose.connection; //Saves the connection as a variable to use
db.on('error', console.error.bind(console, 'connection error:')); //Checks for connection errors
db.once('open', function() { //Lets us know when we're connected
    console.log('Connected');
});

router.delete('/comment', function(req, res, next){
    Comment.find().remove(function(){})
    res.sendStatus(200);
});

/* GET home page. */
router.post('/comment', function(req, res, next) {
    var newcomment = new Comment(req.body);
    newcomment.save(function(err, post) {
        if (err) return console.error(err);
        console.log(post);
        res.sendStatus(200);
    });
});

router.get("/comment", function(req, res, next) {
        var name = req.query["q"];
        console.log(req.query);
        console.log(name);
        var obj = {};
        if (name)
        {
            Comment.find({Name : req.query["q"]}, function(err,list){
            if (err) return console.error(err);
            res.json(list);
        });
        }
        else{
        Comment.find( function(err,list){
            if (err) return console.error(err);
            res.json(list);
        });
        }
    });

module.exports = router;
