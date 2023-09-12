require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const postsRoutes = require('./routes/posts');

// express app
const app = express();

// global middleware , fire for every request
app.use(express.json());
// if there is a data coming with the request it attaches it to req object

// have to use next to go for the next route
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});


// get all of the routes and use it here
// when request made to '/api/posts' then the routes will be used
app.use('/api/posts', postsRoutes);

// routes
// app.get('/', (req, res) => {
//     res.json({message: 'welcome to the app'})
// })

// connect to DB
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


// listen for request
// app.listen(4000, () => {
//     console.log("Listening on port 4000");
// })
// app.listen(process.env.PORT, () => {
//     console.log("Listening on port", process.env.PORT);
// })

// GET /posts - gets all data
// POST /posts - creates new post
// GET /posts/:id - gets a single post
// DELETE /posts/:id - deletes a single post
// PATCH /posts/:id - update a single post