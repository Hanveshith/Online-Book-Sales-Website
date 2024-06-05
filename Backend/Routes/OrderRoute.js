const express = require('express');
const route = express.Router()

const {AddToCart,cartItems,cartItem,removeItemFromCart,OrderBook,validateOrder,orderedbooks} = require('../Controllers/OrderController');

const {authenticateUser} = require('../middleware')

route.post('/:id',authenticateUser,AddToCart);
route.get('/getCartItems',authenticateUser,cartItems);
route.get('/getCartItem/:id',authenticateUser,cartItem);
route.delete('/removeItem/:id',authenticateUser,removeItemFromCart);
route.post('/book/order',authenticateUser,OrderBook);
route.post('/book/order/validate',authenticateUser,validateOrder);
route.get('/GetOrderedBooks',authenticateUser,orderedbooks);

module.exports = route;