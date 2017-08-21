var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');
var config = require('./config/config');
var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var session = require('express-session');
var mongoose = require('mongoose');
var mongoStore = require('connect-mongo')(session);

/**
 * app instance
 */
var app = express();

/**
 * module variables
 */
var port = process.env.PORT || 3030;
var env = config.env;
var dbURL = config.dbURL;
var sessionSecret = config.sessionSecret;
var sessStore;
var db;
var userRoutes = require('./routes/root');
var twitterRoutes = require('./routes/twitter');
var fbRoutes = require('./routes/facebook');

app.locals.errMsg = app.locals.errMsg || null;

/**
 * config and settings
 */
require('clarify');
app.disable('x-powered-by');
app.set('port', port);
app.set('env', env);
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.set('layout', 'layout');

/**
 * database connection
 */
mongoose.connect(dbURL);
db = mongoose.connection;
db.on('error', function(err) {
    console.error('There was a db connection error');
    return console.error(err.message);
});
db.once('connected', function() {
    return console.log('Succesfully connected to ' + dbURL);
});
db.once('disconnected', function() {
    return console.error('Successfully disconnected from ' + dbURL);
});
process.on('SIGINT', function() {
    mongoose.connection.close(function() {
        console.error('dBase connection closed due to app termination');
        return process.exit(0);
    });
});
sessStore = new mongoStore({
    mongooseConnection: mongoose.connection,
    touchAfter: 24 * 3600
});

/**
 * Middleware stack
 */
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    name: 'simpleLib.sess',
    store: sessStore,
    secret: sessionSecret,
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 15
    }
}));
app.use(ejsLayouts);
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Routes
 */
app.get('/test', function(req, res) {
    return res.status(200).json('All\'s welll!!!');
});
app.use('/', userRoutes);
app.use('/twitter', twitterRoutes);
app.use('/facebook', fbRoutes);

/**
 * custom error handler
 */
app.use(function(err, req, res, next) {
    console.error(err.stack);
    return res.status(500).render('pages/errors');
});

module.exports = app;