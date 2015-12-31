var List = require('../../models/list');

module.exports = function(req, res) {
  List.update({
    _id: req.params.id
  }, {
    $set: {
      name: req.body.name
    }
  }, function(err, list) {
    if (err) return handleError(err);
    res.send(list);
  });
}