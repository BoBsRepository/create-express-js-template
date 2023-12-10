const express = require('express');
const {register} = require('../controllers/authController')


const router = express.Router();


router.get('/',register)

module.exports = router;
