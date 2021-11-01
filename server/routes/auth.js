const express = require('express');
const router = express.Router();

const { signup, signin, forgotpassword, resetpassword } = require('../controllers/auth');

router.route('/signup').post(signup);

router.route('/signin').post(signin);

router.route('/forgotpassword').post(forgotpassword);

router.route('/resetpassword/:resetToken').put(resetpassword);

module.exports = router;