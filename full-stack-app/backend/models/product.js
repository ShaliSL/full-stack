const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Product = new Schema({
   name: {
      type: String
   },
   price: {
      type: String
   }
}, {
   collection: 'product'
})

module.exports = mongoose.model('Product', Product)