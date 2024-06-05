const express = require("express");
const {AddBook,GetBook,GetBooks} = require("../Controllers/BookController");
const route = express.Router();


route.post("/",AddBook);
route.get("/",GetBooks);
route.get("/book/:id",GetBook);

module.exports = route;