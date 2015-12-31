var getTodos = require('./todos/getTodos');
var create = require('./todos/create');
var update = require('./todos/update');
var deleteTodo = require('./todos/delete');

module.exports = function(Router) {
  Router.route('/todos')
    //get todos list
    .get(getTodos)
    //create new todo
    .post(create);


  Router.route('/todos/:id')
    //update todo
    .put(update)
    //delete todo
    .delete(deleteTodo);


}