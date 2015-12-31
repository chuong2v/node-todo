var User = require('../models/user'),
  newSession = require('./session/newSession'),
  createSession = require('./session/createSession'),
  deleteSession = require('./session/deleteSession');

module.exports = function(app) {

  app.get('/session/new', newSession);

  app.post('/session', createSession);

  // app.delete('/session/:username', deleteSession);

  app.get('/session/delete', deleteSession);
}