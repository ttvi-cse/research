var express = require('express');
var app = express();
var router = express.Router();

router.use(function(req, res, next) {
    next();
});

router.get('/events', function(req, res, next) {
    res.send('events called!');
});

app.use('/calendar', router);

 // router.all(path, [callback, ...] callback)
 router.all('*', requireAuthentication, loadUser);
 // equivalent
 router.all('*', requireAuthentication);
 router.all('*', loadUser);
 router.all('*', requireAuthentication);

// router.param(name, callback)
// router.route(path)
router.param('user_id', function(req, res, next, id) {
    req.user = {
        id: id,
        name: 'TJ'
    };
    next();
});
router.route('/user/:user_id')
    .all(function(req, res, next) {
        next();
    })
    .get(function(req, res, next) {
        res.json(req.user);
    })
    .put(function(req, res, next) {
        req.user.name = req.params.name;
        res.json(req.function);
    })
    .post(function(req, res, next) {
        next(new Error('not iplemented'));
    })
    .delete(function(req, res, next) {
        next(new Error('not implemented'));
    })

// router.use([path], [function, ...] function) 
routere.use(function(req, res, next) {
    console.log('%s %s %s', req.method, req.url, req.path);
    next();
});

router.use('/bar', function(req, res, next) {
    next();
});

router.use(function(req, res, next) {
    res.send('Hello World');
});

app.use('/foo', router);

var logger = require('morgan');
router.use(logger());
router.use(express.static(__dirname + '/public'));
router.use(function(req, res) {
    res.send('Hello');
})

app.listen(3000);