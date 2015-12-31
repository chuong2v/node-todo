module.exports = function(app) {
  app.get('/', function(req, res) {
    if (!req.session.user)
      res.redirect('/session/new');
    else
      res.render('home', {
        user: req.session.user
      });
  });
}