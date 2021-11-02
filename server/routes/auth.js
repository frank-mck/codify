const express = require('express');
const router = express.Router();
const AuthCtrl = require('../controllers/AuthController');

router.route('/signup').post(AuthCtrl.signup);

router.route('/signin').post(AuthCtrl.signin);

router.route('/forgotpassword').post(AuthCtrl.forgotpassword);

router.route('/resetpassword/:resetToken').put(AuthCtrl.resetpassword);

module.exports = router;