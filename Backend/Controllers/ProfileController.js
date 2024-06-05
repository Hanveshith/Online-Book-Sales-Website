
const jwt = require('jsonwebtoken');
const secert = "my-super-secret-key-21647134443213215";
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

// Use cookie-parser middleware
app.use(cookieParser());
const Profile = async(request,response,next) => {
    try{
        console.log("PROFILE ROUTE IS CALLED")
        const cookies = request.headers.cookie;
        // Extract token from cookies
        const tokenCookie = cookies.split(';').find(cookie => cookie.trim().startsWith('token='));
        if (!tokenCookie) {
            throw new Error('Token cookie not found');
        }
        const token = tokenCookie.split('=')[1];
        jwt.verify(token,secert,{},(error,info)=>{
            next()
            if (error) throw error;
            response.json(info);
        })
    }catch(e){
        // console.log(e);
        return response.status(400).json("ERROR")
    }
}

module.exports = {Profile};