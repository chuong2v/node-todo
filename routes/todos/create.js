var Todo = require('../../models/todo');
var List = require('../../models/list');

module.exports = function(req, res) {
  List.findOne({
    _id: req.body.listId
  }, function(err, list) {
    if (err)
      res.status(500).send(err);
    else {
      var todo = new Todo({
        title: req.body.title,
        done: req.body.done,
        editable: req.body.editable,
        listId: list._id
      });

      todo.save(function(err) {
        if (err)
          res.status(500).send(err);
      });
    }
  });

}