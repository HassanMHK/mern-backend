const Post = require('../models/postModels');
const mongoose = require('mongoose');

// get all posts
const getPosts = async (req, res) => {
    const user_id = req.user._id;
    const posts = await Post.find({ user_id }).sort({createdAt: -1});
    res.status(200).json(posts);
};

// get a single post
const getPost = async (req, res) => {
    const { id } = req.params;
    const user_id = req.user._id;

    // check if the id is valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Post not found'});
    }

    const post = await Post.findById(id);
    if(!post){
        return res.status(400).json({error: 'Post not found'});
    }
    res.status(200).json(post);
};

// creating new post
const createPost = async (req, res) => {
    const {title, text} = req.body;
    // add document to database
    try{
        const user_id = req.user._id;
        const post = await Post.create({title, text, user_id});
        res.status(200).json(post);
    }catch(error){
        res.status(400).json({error: error.message});
    }
};


// deleting a post
const deletePost = async (req, res) => {
    const { id } = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Post not found'});
    }

    const post = await Post.findOneAndDelete({_id: id});
    
    if(!post){
        return res.status(400).json({error: 'Post not found'});
    }

    res.status(200).json(post);
};  

// updating a post
const updatePost = async (req, res) => {
    const { id } = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Post not found'});
    }

    // second argument is the update
    const post = await Post.findOneAndUpdate({_id: id}, {
        ...req.body
    });

    if(!post){
        return res.status(400).json({error: 'Post not found'});
    }

    const updatedPost = await Post.findById(id);
    res.status(200).json(updatedPost);
};  


module.exports = {
    getPosts,
    getPost,
    createPost,
    deletePost,
    updatePost
}