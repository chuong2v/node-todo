var User = require('../../models/user');

module.exports = function(req, res) {
  User.findOne({
    username: req.body.username,
    password: req.body.password
  }, function(err, user) {
    if (err)
      res.send(err, 500);
    else if (!user)
      res.redirect('/session/new');
    else {
      req.session.user = user;
      req.session.save();
      res.redirect('/');
    }
  })
}