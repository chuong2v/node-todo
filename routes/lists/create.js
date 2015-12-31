var List = require('../../models/list');

module.exports = function(req, res) {
  console.log(req.body);
  var list = new List({
    name: req.body.name,
    userId: req.session.user._id
  });

  list.save(function(err) {
    if (err)
      res.status(500).send(err);
  });
}