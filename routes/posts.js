const express = require('express');

// creating the router
const router = express.Router();

// '/api/posts/'
// GET all posts
router.get('/', (req, res) => {
    res.json({message: "GET all posts"});
});

// '/api/posts/:id'
// GET a single post
router.get('/:id', (req, res) => {
    res.json({message: "GET single post"});
});

// POST a new post
router.post('/', (req, res) => {
    res.json({message: "POST a new post"});
});

// Delete post
router.delete('/:id', (req, res) => {
    res.json({message: "DELETE a post"});
});

// update post
router.patch('/:id', (req, res) => {
    res.json({message: "UPDATE a post"});
});

// export the router
module.exports = router;

// handling POST or PATCH, get the data from user in req object
// and to access that we use a middleware in express (express.json())