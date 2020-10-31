const express = require('express');
const app = express();
const OrderRoute = express.Router();

// Order model
let Order = require('../models/order');

// Add Order
OrderRoute.route('/create').post((req, res, next) => {
    Order.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Orders
OrderRoute.route('/').get((req, res) => {
    Order.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Order
OrderRoute.route('/read/:id').get((req, res) => {
    Order.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Order
OrderRoute.route('/update/:id').put((req, res, next) => {
    Order.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete Order
OrderRoute.route('/delete/:id').delete((req, res, next) => {
    Order.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = OrderRoute;