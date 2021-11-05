const jwt = require('jwt');
const User = require('../models/User');

exports.protect = async (req, res, next) => {
  let token;
  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(new Error('Not authorized!'))
  }
}