var List = require('../../models/list');

module.exports = function(req, res) {
  List.find({
    userId: req.session.user._id
  }, function(err, lists) {
    if (err)
      res.status(500).send(err);
    else {
      return res.json(lists);
    }
  });
}