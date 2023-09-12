const express = require('express');
const {
    getPosts, getPost, createPost, deletePost, updatePost
} = require('../controllers/postController');
// const Post = require('../models/postModels');

// creating the router
const router = express.Router();

// '/api/posts/'
// GET all posts
router.get('/', getPosts);
// router.get('/', (req, res) => {
//     res.json({message: "GET all posts"});
// });

// '/api/posts/:id'
// GET a single post
router.get('/:id', getPost);
// router.get('/:id', (req, res) => {
//     res.json({message: "GET single post"});
// });

// POST a new post
router.post('/', createPost);
// router.post('/', async (req, res) => {
//     // const {text} = req.body;
//     // try{
//     //     // create a new document
//     //     const post = await Post.create({text});
//     //     res.status(200).json(post);
//     // }catch(error){
//     //     res.status(400).json({error: error.message});
//     // }
//     // res.json({message: "POST a new post"});
// });

// Delete post
router.delete('/:id', deletePost);
// router.delete('/:id', (req, res) => {
//     res.json({message: "DELETE a post"});
// });

// update post
router.patch('/:id', updatePost)
// router.patch('/:id', (req, res) => {
//     res.json({message: "UPDATE a post"});
// });

// export the router
module.exports = router;

// handling POST or PATCH, get the data from user in req object
// and to access that we use a middleware in express (express.json())