var Todo = require('../../models/todo');

module.exports = function(req, res) {
  Todo.remove({
    _id: req.params.id
  }, function(err) {
    if (err) return handleError(err);
  });
}