const express = require("express");
const path = require("path");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const flash = require("connect-flash");
const bodyParser = require("body-parser");
const session = require("express-session");

const {PORT,DBURL} = require("./config.js");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(flash());
app.use(express.urlencoded({ extended: false }));

// app.use(cors());
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET','POST','PUT','DELETE'],
    allowedHeaders: ['Content-Type'],
    credentials: true,
}))

//flashmessages
// app.use(function (request, response, next) {
//     response.locals.messages = request.flash();
//     next();
// });

//session
app.use(
    session({
        secret: "my-super-secret-key-21647134443213215",
        cookie: {
            maxAge: 24 * 60 * 60 * 1000,
        },
        resave: true,
        saveUninitialized: true,
    })
);

app.use(passport.initialize());
app.use(passport.session());


//models
const Book = require("./models/book.js");


//database connection
mongoose.connect(DBURL).then(()=>{
    console.log("DB connection successfull");
    app.listen(PORT,()=>{
        console.log(`Server is live at ${PORT}`);
    });
}).catch((error) =>{
    console.log(error);
})



//Routes
const BookRoute = require("./Routes/BookRouter.js");
const SignupRoute = require("./Routes/SignupRouter.js")
const LoginRoute = require("./Routes/LoginRouter.js");
const ProfileRoute = require("./Routes/ProfileRouter.js");
const LogoutRoute = require("./Routes/LogoutRoute.js");
const OrderRoute = require("./Routes/OrderRoute.js")

app.use('/books',BookRoute);
app.use('/Signup',SignupRoute);
app.use('/Login',LoginRoute);
app.use('/Profile',ProfileRoute);
app.use('/logout',LogoutRoute);
app.use('/book/add',OrderRoute);
app.use('/user',OrderRoute);


