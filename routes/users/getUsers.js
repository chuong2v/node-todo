var User = require('../../models/user');

module.exports = function(req, res) {
  User.find(function(err, users) {
    if (err)
      res.status(500).send(err);
    else
      res.render('users/index', {
        users: users
      });
  });
}