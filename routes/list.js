var getLists = require('./lists/getLists'),
  createList = require('./lists/create'),
  update = require('./lists/update'),
  deleteList = require('./lists/delete');

module.exports = function(Router) {
  Router.route('/lists')
    // get lists
    .get(getLists)
    // create new list
    .post(createList);

  Router.route('/lists/:id')
    // delete list
    .delete(deleteList)
    // update list
    .put(update);

}