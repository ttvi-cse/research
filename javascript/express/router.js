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


app.listen(3000);6