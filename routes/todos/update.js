var Todo = require('../../models/todo');

module.exports = function(req, res) {
  Todo.update({
    _id: req.params.id
  }, {
    $set: {
      title: req.body.title,
      done: req.body.done,
      editable: req.body.editatle
    }
  }, function(err, todo) {
    if (err) return handleError(err);
    res.send(todo);
  });
}