const express = require('express');
const {
    getPosts, getPost, createPost, deletePost, updatePost
} = require('../controllers/postController');
const requireAuth = require('../middleware/requireAuth');

// creating the router
const router = express.Router();

// Protect the following routes by authorization
router.use(requireAuth);

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