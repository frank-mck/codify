const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');
const bcrypt = require('bcryptjs')

const AuthController = {
  getAllUsers: async (req, res) => {
    const users = await User.find({})
    try {
      res.send(users);
    } catch(err) {
      console.log(err)
    }
  },

  signup: async (req, res, next) => {
    const {username, email, password} = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    try {
      const user = await User.create({ 
        username: username, email: email, password: hashedPassword
      });
      sendToken(user, 201, res);
    } catch (error) {
      const errorFeild = Object.keys(error.keyValue)[0];
      return next(new ErrorResponse(`We already have an account with that ${errorFeild}`, 404))
    }
  },

  signin: async (req, res, next) => {
    const {username, password } = req.body;
    try {
      const user = await User.findOne({ username }).select("+password");
      if (!user) {
        return next(new ErrorResponse("Invalid username or password!", 404))
      }
      const isMatch = await user.matchPasswords(password);
      if (isMatch) {
        sendToken(user, 200, res);
      }
      if(!isMatch) {
        return next(new ErrorResponse("Invalid username or password!", 404))
      } 
    } catch (error) {
      console.log(error)
    }
  },

  forgotpassword: (req, res, next) => {
    res.send('forgotpassword')
  },

  resetpassword: (req, res, next) => {
    res.send('resetpassword')
  }

}

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({ success: true, token });
}

module.exports = AuthController;