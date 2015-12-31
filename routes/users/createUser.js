var User = require('../../models/user');
var List = require('../../models/list');

module.exports = function(req, res, next) {
  var find = User.findOne({
    username: req.body.username
  });

  find.exec(function(err, user) {
    if (err) {
      res.status(500).send(err);
    } else if (user) {
      res.status(409).send('Conflict!');
    } else {
      User.create({
        username: req.body.username,
        password: req.body.password
      }, function(err, user) {
        if (err)
          res.status(500).send(err);
        else {
          List.create({
            name: "Inbox",
            userId: user._id
          }, function(err, list) {
            if (err)
              res.status(500).send(err);
            else {
              req.session.user = user;
              res.redirect('/');
            }
          });
        }
      });
    }
  });
}