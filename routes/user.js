const express = require('express');

const { userRegister, userLogin } = require('../controllers/userController');

// creating the router
const router = express.Router();

//register
router.post('/register', userRegister);

//login
router.post('/login', userLogin);

// export the router
module.exports = router;