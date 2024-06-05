const express = require('express');
const route = express.Router();

const {Profile} = require('../Controllers/ProfileController');
route.get('/',Profile);

module.exports = route;
