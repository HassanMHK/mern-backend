const express = require('express');
const {
    getPosts, getPost, createPost, deletePost, updatePost
} = require('../controllers/postController');

// creating the router
const router = express.Router();

// GET all posts
router.get('/', getPosts);

// GET a single post
router.get('/:id', getPost);

// POST a new post
router.post('/', createPost);

// Delete post
router.delete('/:id', deletePost);

// update post
router.patch('/:id', updatePost)

// export the router
module.exports = router;