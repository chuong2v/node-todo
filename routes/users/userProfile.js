 var User = require('../../models/user');

 module.exports = function(req, res) {
   User.findOne({
     username: req.params.name
   }, function(err, user) {
     if (err)
       res.status(500).send(err);
     else if (!user)
       res.status(404).send("Not found");
     else
       res.render('users/profile', {
         user: user
       });
   });
 }