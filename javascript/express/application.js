var express = require('express');
var app = express();

// express.static(root, [options])
// dotfiles, etag, extensions, fallthrough, index, lastModified,
// maxAge, redirect, setHeaders

// express.Router([options])
// caseSensitive, mergeParams, strict

app.get('/', function(req, res) {
    res.send('hello world');
});

app.listen(3000);


// Routing HTTP requests, see for example, app.METHOD and app.param
// Configuring middleware, see app.route
// Rendering HTML views; see app.render
// Registering a template engine; see app.engine.

// Properties
// - app.locals: The app.locals has properties that are local variables within the application.

// - app.mountpath
var admin = express();

admin.get('/', function(req,res) {
    console.log(admin.mountpath); // admin
    res.send('admin homepage');
});

app.use('/admin', admin);

var secret = express();
secret.get('/', function(req,res) {
    console.log(secret.mountpath);
    res.send('admin secret');
});

admin.use('/secr*t', secret);
app.use(['/adm*n', '/manager'], admin);

// Events
// - app.on('mount', callback(parent))

admin.on('mount', function(parent) {
    console.log('Admin Mounted');
    console.log(parent);
});

admin.get('/', function(req, res){
    res.send('admin homepage');
});
app.use('/admin', admin);

// Methods
// - app.all(path, callback[,callback ...])
// - path: 
//      +  string repressenting a apth
//      + a path pattern
//      + a regular expression pattern  to match paths
//      + an array of combinations of any of the above
// - callback:
//      + middleware function
//      + series of middleware function
//      + an array of middleware functions
//      + a combination of all of the above
app.all('/secret', function(req, res, next) {
    console.log('Accessing the secret section');
    next();
})
// - app.delete(path, callback[,callback ...])
app.delete('/', function(req, res) {
    res.send('DELETE request to homepage');
})
// - app.disable(name)
app.disable('trust proxy');
app.get('trust proxy');

// - app.disabled(name)
app.disabled('trust proxy');

app.enabled('trust proxy');
app.disabled('trust proxy');

app.enable('trust proxy');
app.get('trust proxy');

// - app.enabled(name)
app.enabled('trust proxy')

app.enalble('trust proxy');
app.enabled('trust proxy');

// - app.engine(ext, callback)
// - app.get(name)
// app.get(path, callback[,callback ...])
app.get('/', function(req, res) {
    res.send('GET request to homepage');
});

// - app.listen(path, [callback])
// Starts a UNIX socket and listens for connections on the given path.
app.listen('/tmp/sock');

// - app.listen(port, [hostname], [backlog], [callback])
// Binds and listen for connections on the specified host and port. 
// This method is identical to Node's http.Server.listen();
app.listen(3000);


// app.METHOD(path, callback[,callback ...])
// app.param([name], callback)
// 
app.param('user', function(req, res, next, id) {
    User.find(id, function(er, user) {
        if (err) {
            next(err);
        } else if (user) {
            req.user = user;
        } else {
            next(new Error('failed to load user'));
        }
    })
})


// app.path()
// - returns the canonical path of the app, a string

// app.pust(path, callback[, callback ...])
app.post('/', function(req, res) {
    res.send('POST request to homepage');
})

// app.put(path, callback[, callback ...])
// app.render(view, [locals], calback)

// app.route(path)
// returns an instance of a single route, which you can then use to handle HTTP verds 
// with optional middleware. Use app.route() to avoid duplicate route names
// (and thus typo errors)
app.route('/events').all(function(req, res, next) {

})
.get(function(req, res, next) {
    res.json();
})
.post(function(req, res, next) {

})

// app.set(name, value)
// app.use([path,] callback [,callback ...])