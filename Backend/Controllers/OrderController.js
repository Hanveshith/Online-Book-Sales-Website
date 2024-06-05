const { response, request } = require("express")
const Cart = require("../models/cart")
const Order = require("../models/orders")
const Book = require("../models/book");
const Razorpay = require("razorpay");
const crypto = require("crypto");


require('dotenv').config();

const AddToCart = async(request,response) => {
    try{
        itemExists = await Cart.findOne({bookId:request.params.id,userId:request.user.id});
        if (itemExists) {
            return response.status(402).json("ITEM ALREADY IN CART");
        }
        const cartitem = await Cart.create({
            userId: request.user.id,
            bookId:request.params.id,
        })
        return response.status(200).json("ADDED TO CART")
    }catch(e){
        console.log(e)
        if (e.code === 11000) {
            return response.status(402).json("ITEM ALREADY IN CART");
        }
        return response.status(400).json("ERROR IN ADDING")
    }
}

const cartItems = async(request,response) => {
    try{
        const allcartItems = await Cart.find({userId:request.user.id});
        const bookIds = allcartItems.map(item => item.bookId);
        const bookDetails = await Book.find({ _id: { $in: bookIds } });
        response.status(200).json(bookDetails);
    }catch(e){
        console.log(e)
        response.status(400).json("ERROR IN FETCHING CART ITEMS")
    }
}
const cartItem = async(request,response) => {
    try{
        const cartItem = await Cart.find({bookId:request.params.id,userId:request.user.id});
        // const bookIds = allcartItems.map(item => item.bookId);
        // const bookDetails = await Book.find({ _id: { $in: bookIds } });
        console.log(cartItem)
        if (cartItem && cartItem.length > 0){
            response.status(200).json(cartItem);
        }
    }catch(e){
        console.log(e)
        response.status(400).json("ERROR IN FETCHING CART ITEM")
    }
}

const orderItem = async(request,response) => {
    try {
        const item = await Order.create({
            Quantity: request.body.Quantity,
            userId: request.user.id,
            bookId:request.params.id,
            PaymentStatus: request.body.PaymentStatus,
        })
        return response.status(200).json("ORDERED")
    }catch(e){
        console.log(e)
        return response.status(400).json("ERROR IN ORDERING")
    }
}

const removeItemFromCart = async (request, response) => {
    try {
        console.log(request.params.id)
        const item = await Cart.findOneAndDelete({ bookId: request.params.id });
        if (!item) {
            return response.status(404).json("ITEM NOT FOUND");
        }
        return response.status(200).json("ITEM REMOVED FROM CART");
    } catch (error) {
        console.log(error);
        return response.status(400).json("ERROR IN REMOVING ITEM FROM CART");
    }
}


const OrderBook = async(request,response) =>{
    try{
        const razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET,
        });

        const options = request.body;
        console.log(options);
        const order = await razorpay.orders.create(options);

        if(!order){
            return response.status(400).json("ERROR IN ORDERING")
        }
        response.json(order);
    }catch(e){
        console.log(e)
        response.status(500).json("ERROR IN ORDERING")
    }

}

const validateOrder = async(request,response) => {
    try{
        const {razorpay_order_id,razorpay_payment_id,razorpay_signature} = request.body;
        const shasum = crypto.createHmac('sha256',process.env.RAZORPAY_KEY_SECRET)
        shasum.update(`${razorpay_order_id}|${razorpay_payment_id}`)
        const digest = shasum.digest('hex')
        if(digest !== razorpay_signature){
            return response.status(400).json("PAYMENT FAILED")
        }else{
            const allcartItems = await Cart.find({userId:request.user.id});
            const bookIds = allcartItems.map(item => item.bookId);
            console.log(bookIds)
            const order = new Order({
                userId: request.user.id,
                bookId: bookIds,
                Quantity: 1,
                OrderId: razorpay_order_id,
                paymentId: razorpay_payment_id,
                orderDate: new Date(),
            })
            await order.save();
            await Cart.deleteMany({userId:request.user.id});
            return response.status(200).json({message: "PAYMENT SUCCESSFULL",order:order})
        }
    }catch(e){
        console.log(e)
        response.status(500).json("ERROR IN PAYMENT")
    }
}


const orderedbooks = async (request, response) => {
    try {
        const orders = await Order.find({ userId: request.user.id });
        const bookIds = orders.flatMap(order => order.bookId);
        
        // Constructing bookIdToDateMap correctly
        const bookIdToDateMap = {};
        orders.forEach(order => {
            order.bookId.forEach(bookId => {
                bookIdToDateMap[bookId.toString()] = order.orderDate;
            });
        });

        const bookDetails = await Book.find({ _id: { $in: bookIds } });

        // Mapping book details with order dates
        const booksWithOrderDates = bookDetails.map(book => ({
            ...book.toObject(),
            orderDate: formatDate(bookIdToDateMap[book._id.toString()])
        }));

        response.status(200).json(booksWithOrderDates);
    } catch (e) {
        console.log(e);
        response.status(400).json("ERROR IN FETCHING ORDERS");
    }
}

// Function to format date as "date month year"
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}



module.exports = {AddToCart,cartItems,cartItem,removeItemFromCart,OrderBook,orderItem,validateOrder,orderedbooks}