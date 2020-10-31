const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Order = new Schema({
   name: {
      type: String
   },
   product: {
      type: String
   },
   quantity: {
      type: String
   },
}, {
   collection: 'order'
})

module.exports = mongoose.model('Order', Order)