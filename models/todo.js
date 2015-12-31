var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var Todo = new Schema({
  title: {
    type: String
  },
  done: {
    type: Boolean
  },
  editable: {
    type: Boolean
  },
  listId: {
    type: Schema.Types.ObjectId
  }
});

module.exports = mongoose.model('Todo', Todo);