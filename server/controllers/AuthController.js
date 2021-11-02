const User = require('../models/User')

const AuthController = {
  signup: async (req, res, next) => {
    const {username, email, password} = req.body;
  
    try {
      const user = await User.create({ 
        username, email, password
      });
      user.save();
    } catch (error) {
      res.send(error)
    }
  },

  signin: (req, res, next) => {
    res.send('signup')
  },

  forgotpassword: (req, res, next) => {
    res.send('forgotpassword')
  },

  resetpassword: (req, res, next) => {
    res.send('resetpassword')
  }

}

module.exports = AuthController;