const express =require('express');
const route = express.Router();

const {AddUser} = require('../Controllers/SignupController');

route.post('/',AddUser);

module.exports = route;