const User = require('../models/User')

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
  
    try {
      const user = await User.create({ 
        username, email, password
      });
      await user.save();
    } catch (error) {
      console.log(error)
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