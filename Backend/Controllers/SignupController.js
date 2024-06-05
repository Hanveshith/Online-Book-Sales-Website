
const User = require('../models/user');
const bcrypt = require("bcrypt");
const saltRounds = 10;

const AddUser = async (request,response) =>{
    try{
        // console.log(request.body);
        const { password, ...rest } = request.body;
        const hashedPwd = await bcrypt.hash(password, saltRounds);
        const newUser = {
            ...rest,
            password: hashedPwd
        };

        const user = await User.create(newUser);
        response.send(user);
    }catch(error){
        console.log(error);
    }
}

module.exports = {AddUser};