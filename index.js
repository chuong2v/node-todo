var express = require('express'),
  Router = express.Router(),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  db = mongoose.connect('mongodb://localhost/demo');
var session = require('express-session');
var app = express();

// set up handlebars view engine
var handlebars = require('express-handlebars').create({
  defaultLayout: 'main',
  helpers: {
    section: function(name, options) {
      if (!this._sections) this._sections = {};
      this._sections[name] = options.fn(this);
      return null;
    }
  }
});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
  extended: true
})); // for parsing application/x-www-form-urlencoded
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

app.use('/public', express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.set('port', process.env.PORT || 3000);

require('./routes/home')(app);
require('./routes/users')(app);
require('./routes/session')(app);
// require('./routes/todo')(app);
// require('./routes/list')(app);

require('./routes/list')(Router);
require('./routes/todo')(Router);
app.use('/api', Router);

// custom 404 page
app.use(function(req, res) {
  res.status(404);
  res.render('404');
});

// custom 500 page
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function() {
  console.log('Express started on http://localhost: ' + app.get('port') + '; press Ctrl-C to terminate.');
});