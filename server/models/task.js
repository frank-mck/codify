const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: [true, 'Have you taken out the trash?']
  },
  user: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
},
{ timestamps: true },
);

module.exports = mongoose.model('Task', taskSchema);