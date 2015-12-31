var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var User = new Schema({
  username: {
    type: String,
    validate: {
      validator: function(v) {
        return v.length > 5
      },
      message: 'Username must have at least 6 characters'
    },
    unique: true
  },
  name: {
    type: String,
    validate: {
      validator: function(v) {
        return v.length > 0
      },
      message: "Name must be not empty"
    }
  },
  password: {
    type: String,
    validate: {
      validator: function(v) {
        return v.length > 7
      },
      message: 'Password must have at least 8 characters'
    }
  }
});

module.exports = mongoose.model('User', User);