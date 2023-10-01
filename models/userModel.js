const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// create static register method
userSchema.statics.register = async function(email, password){

    // validation of email & password
    if(!email || !password){
        throw Error('Must fill all the fields');
    }
    if(!validator.isEmail(email)){
        throw Error('Email is not valid');
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password is not strong');
    }

    //this refers to the model ex USER
    //this will not work with arrow function
    const exists = await this.findOne({email});
    if(exists){
        throw Error('Email is already used');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({email, password: hash});

    return user;
}

// create static login method
userSchema.statics.login = async function(email, password){

    // validation of email & password
    if(!email || !password){
        throw Error('Must fill all the fields');
    }

    const user = await this.findOne({email});
    if(!user){
        throw Error('Email is not correct');
    }

    const match = await bcrypt.compare(password, user.password);

    if(!match){
        throw Error('Password is not correct');
    }

    return user;
}

module.exports = mongoose.model('User', userSchema);