var List = require('../../models/list');
var Todo = require('../../models/todo');

module.exports = function(req, res) {
  List.remove({
    _id: req.params.id
  }, function(err) {
    if (err) return handleError(err);
  });
}