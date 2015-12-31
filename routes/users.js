var  getUser = require('./users/getUsers'),
  createUser = require('./users/createUser'),
  userProfile = require('./users/userProfile'),
  newUser = require('./users/newUser'),
  deleteUser = require('./users/deleteUser');

  module.exports = function(app) {
    //get users list
    app.get('/users', getUser);

    //create new user
    app.post('/users', createUser);

    //link to the new user page
    app.get('/users/new', newUser);

    //show user's profile
    app.get('/users/:name', userProfile);

    //delete user
    app.delete('/users/:id', deleteUser);
  }