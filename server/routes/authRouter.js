const express = require('express');
const router = express.Router();
const AuthCtrl = require('../controllers/AuthController');
const { protect } = require('../middleware/auth');

router.route('/users').get(protect, AuthCtrl.getAllUsers)

router.route('/signup').post(protect, AuthCtrl.signup);

router.route('/signin').post(protect, AuthCtrl.signin);

router.route('/forgotpassword').post(protect, AuthCtrl.forgotpassword);

router.route('/resetpassword/:resetToken').put(protect, AuthCtrl.resetpassword);

module.exports = router;