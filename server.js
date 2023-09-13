require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const postsRoutes = require('./routes/posts');
// const cors = require('cors');

// express app
const app = express();

// app.use(cors());

// global middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use('/api/posts', postsRoutes);

// connection to DB
mongoose.connect(process.env.MONG_URI)
.then(() => {
    // listen for requests once connected to DB
    app.listen(process.env.PORT, () => {
        console.log("Connected to DB and Listening on port", process.env.PORT);
    })
})
.catch((error) => {
    console.log(error);
});

// GET /posts - gets all data
// POST /posts - creates new post
// GET /posts/:id - gets a single post
// DELETE /posts/:id - deletes a single post
// PATCH /posts/:id - update a single post