var mongoose = require ('mongoose');

var ProductSchema = new mongoose.Schema({
  title: String,
  price: String,
  URL: String,
  ordered: {type: Number, default: 0},
});

ProductSchema.methods.order = function(cb) {
  this.ordered += 1;
  this.save(cb);
};

mongoose.model('Product', ProductSchema);

/*var db = mongoose.connection; //Saves the connection as a variable to use
db.on('error', console.error.bind(console, 'connection error:')); //Checks for connection errors
db.once('open', function() { //Lets us know when we're connected
    console.log('Connected');
});*/