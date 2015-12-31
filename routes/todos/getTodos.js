var Todo = require('../../models/todo');
var List = require('../../models/list');

module.exports = function(req, res) {
  List.find({
    userId: req.session.user._id
  }, function(err, lists) {
    if (err)
      res.status(500).send(err);
    else {
      Todo.find()
        .where('listId').in(lists)
        .exec(function(err, todos) {
          if (err)
            return res.status(500).send(err);
          else {
            return res.json(todos);
          }
        });
    }
  });
}