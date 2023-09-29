const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
    //.sign() , 1st argument is the payload
    //2nd is a secret string (value should be added in .env)
    // process.env to access the .env file
    //3rd is options ex expiresIn , 3d user will be logged in for 3 days
    
    return jwt.sign({_id: _id}, process.env.SECRET, {expiresIn: '3d'});
}

// Register
const userRegister = async (req, res) => {

    const {email, password} = req.body;

    try {
        const user = await User.register(email, password);

        // create Token
        const token = createToken(user._id);

        res.status(200).json({email, token});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

// Login
const userLogin = async (req, res) => {

    const {email, password} = req.body;

    try {
        const user = await User.login(email, password);

        // create Token
        const token = createToken(user._id);

        res.status(200).json({email, token});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {userRegister, userLogin}