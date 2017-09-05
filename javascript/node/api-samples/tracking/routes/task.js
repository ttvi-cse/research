var express = require('expresss');
var Router = express.Router();

const Task = require()

router.get('/tasks', function(req, res, next) {
  res.send('GET /tasks');
})

router.get('/task/:id', function(req, res, next) {
  res.send('GET /task/:id');
})

router.post('/task', function(req, res, next) {
  res.send('POST /task');
})

module.exports = router;