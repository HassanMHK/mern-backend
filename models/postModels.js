// Schema: defines the structure of a particular document inside database
// Model: schema applied to a particular model, use the model to interact a collection of that name

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// first argument how the schema looks
// second argument pass object with timestamps property, to track when the post is created or updated
const postSchema = new Schema({
    text: {
        type: String,
        required: true
    }
}, {timestamps: true});

// creating the model
module.exports = mongoose.model('Post', postSchema);