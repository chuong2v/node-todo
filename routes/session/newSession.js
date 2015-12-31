module.exports = function(req, res) {
  if (!req.session.user)
    res.render('session/new', {
      layout: null
    });
  else
    res.redirect('/');
}