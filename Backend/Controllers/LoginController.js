const User = require('../models/user');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secert = "my-super-secret-key-21647134443213215";
const Login = async(request,response) => {
    try{

        const {email,password} = request.body;
        const userdoc = await User.findOne({email})
        const result = await bcrypt.compare(password,userdoc.password);
        console.log(result)
        // console.log(request.body)
        if(result){
            jwt.sign({email,id:userdoc._id},secert,{},(error,token) => {
                if(error) throw error;
                // response.json(token);
                response.cookie('token',token).json("ok");
    
            })
        }else{
            // response.status(400).json("Wrong Credentials");
        }
    }catch(e){
        console.log("Wrong Credentials")
    }
}

module.exports = {Login};