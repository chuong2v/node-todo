var List = require('../../models/list');
var Todo = require('../../models/todo');

module.exports = function(req, res) {
  Todo.remove({
    listId: req.params.id
  }, function(err) {
    if (err){
      console.log("loi cmnr");
      res.status(500).send(err);
    }
    else {
      List.remove({
        _id: req.params.id
      }, function(err) {
        if (err) return handleError(err);
      });
    }
  })
}