var express = require('express');
var router = express.Router();

var user = require('./user');
// var test = require('./task');

const TaskController = require('../controllers/task');
const TagController = require('../controllers/tag');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('api')
});

router.use('/user', user);

router.get('/task', function(req, res, next) {
  TaskController.listAll(req, res, next);
})

router.get('/task/:id', function(req, res, next) {
  TaskController.viewDetail(req, res, next);
})

router.post('/task', function(req, res, next) {
  TaskController.create(req, res, next);
})

router.get('/tag', function(req, res, next) {
  TagController.listAll(req, res, next);
})

module.exports = router;
