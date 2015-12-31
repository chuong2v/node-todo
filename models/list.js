var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var List = new Schema({
  name: {
    type: String
  },
  userId: {
    type: Schema.Types.ObjectId
  }
});

module.exports = mongoose.model('List', List);