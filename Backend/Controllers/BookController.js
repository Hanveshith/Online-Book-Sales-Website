const Book = require("../models/book.js");
const BookNotification = require("../models/booknotification.js");

const AddBook = async (request,response) => {
    try{
        const newBook = {
            BookTitle: request.body.BookTitle,
            BookImage: request.body.BookImage,
            BookDescription: request.body.BookDescription,
            BookAuthor: request.body.BookAuthor,
            BookPublisher: request.body.BookPublisher,
            BookCategories: request.body.BookCategories,
            BookPrice: request.body.BookPrice,
            BookYear: request.body.BookYear,
            BookLanguage: request.body.BookLanguage,
            BookOfferPrice:  request.body.BookOfferPrice,
            BookRating:  request.body.BookRating,
            Stock: request.body.Stock
        }
        const book = await Book.create(newBook);
        return response.json("success")
    }catch(error){
        console.log(error)
    }
};

const GetBooks = async(request,response) => {
    try{
        const Books = await Book.find({})
        return response.status(200).json({data:Books});
    }catch(error){
        console.log(error)
        
    }
};

const GetBook = async(request,response) => {
    try{
        const {id} = request.params;
        const Bookdata = await Book.findById(id);
        console.log(Bookdata)

        return response.status(200).json({Bookdata});
    }catch(error){
        console.log(error)

    }
};

const Notify = async(request,response) => {
    try{
        const {id} = request.params;
        const notifiedbook = await BookNotification.create({bookId:id,userId:request.user.id});
        return response.status(200).json({message:"success",book:notifiedbook});
    }catch(error){
        console.log(error)
        return response.status(500).json({message:"error"})
    }
};
module.exports = {AddBook,GetBooks,GetBook,Notify}