const express = require("express")
const route = express.Router()

const {Logout} = require("../Controllers/LogoutController");

route.post("/",Logout);

module.exports = route;