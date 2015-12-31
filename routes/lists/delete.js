var List = require('../../models/list');

module.exports = function(req, res) {
  List.remove({
    _id: req.params.id
  }, function(err) {
    if (err) return handleError(err);
  });
}