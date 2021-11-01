const express = require('express');
const router = express.Router();

const { signup } = require('../controllers/auth');

router.route('/signup').post(signup);

router.route('/signin').post(signin);

router.route('/forgotpassword').post(forgotpassword);

router.route('/resetpassword/:resetToken').post(reset);

module.exports = router;