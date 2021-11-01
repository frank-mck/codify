const User = require('../models/User')

exports.signup = async (req, res, next) => {
  const {username, email, password} = req.body;

  try {
    const user = await User.create({ 
      username, email, password
    });
    user.save();
  } catch (error) {
    console.log(error)
  }
}

exports.signin = (req, res, next) => {
  res.send('signup')
}

exports.forgotpassword = (req, res, next) => {
  res.send('forgotpassword')
}

exports.resetpassword = (req, res, next) => {
  res.send('resetpassword')
}