var express = require('express');
var app = express();

app.get('/user/:id', function(req, res) {
    res.send('user' + req.params.id);
});

app.get('/user/:id', function(request, response) {
    response.send('user' + request.params.id);
});

// Properties
// req.app
app.get('/viewdirectory', require('./mymiddleware.js'));

// req.baseUrl
var greet = express.Router();

greet.get('/jp', function(req, res) {
    console.log(req.baseUrl);
    res.send('Konichiwa!');
});

app.use('/greet', greet);

// req.body
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var cookieParser = require('cookie-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cookieParser());

app.post('/profile', upload.array(), function(req, res, next) {
    console.log(req.body);
    console.log('Cookies: ', req.cookies);
    res.json(req.body);
});

// req.cookies

// req.fresh

// req.hostname

// req.ip

app.get('/', function(req, res) {
    console.log(req.ip);
    console.log(app.get('trust proxy'));
    res.send('stop');
});

// req.ips

// req.method

// req.originalUrl

// req.params

// req.path

// req.protocol

// req.query

// req.route

// req.secure

// req.signedCookies

// req.stale <> req.fresh

// req.subdomains

// req.xhr

// Methods

// req.accepts(types)
req.accepts('html');
req.accepts('text/html');
req.accepts(['json', 'text']);

// req.acceptsCharsets(charset[, ...])
// req.acceptsEncodings(encoding[,..])
// req.acceptsLanguages(lang [, ...])
// req.get(field)
// aliased as req.header(field)

// req.is(type)
// req.param(name [, defaultValue]) - deprecated
// req.range(size[, options])



app.listen(3000);