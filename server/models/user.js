const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
    unique: [true, "Username already taken!"]
  },
  password: {
    type: String,
    required: [true, "please add a password"],
    minlength: 6,
    select: false, //When we query for a user we dont want to pass back the password too
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: [true, "We already have an account with that email!"],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email address'],
  },
  task: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task'
  },
  completedTasks: {
    type: Number
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

userSchema.methods.matchPasswords = async function(password) {
  return await bcrypt.compare(password, this.password);
}

userSchema.methods.getSignedToken = function() {
  return jwt.sign({ id: this._id}, process.env.JWT_SECRET, { 
    expiresIn: process.env.JWT_EXPIRE
  })
}

module.exports = mongoose.model('User', userSchema);