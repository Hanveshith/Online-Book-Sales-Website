const express = require("express");
const {AddBook,GetBook,GetBooks,Notify} = require("../Controllers/BookController");
const route = express.Router();
const {authenticateUser} = require('../middleware')


route.post("/",AddBook);
route.get("/",GetBooks);
route.get("/book/:id",GetBook);
route.post("/book/notify/:id",authenticateUser,Notify);

module.exports = route;