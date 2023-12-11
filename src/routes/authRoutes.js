const express = require('express');
const {register , login , testRoute} = require('../controllers/authController')


const router = express.Router();


router.post('/register',register);
router.post('/login',login);
router.get('/',testRoute);

module.exports = router;
