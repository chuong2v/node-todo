var User = require('../../models/user');

module.exports = function(req, res) {
  User.remove({
    _id: req.params.id
  }, function(err) {
    if (err) res.status(500).send(err);
  })
}