var app = require('./app');
var http = require('http');

var server = http.createServer(app);

var port = app.get('port');
var env = app.get('env');

server.listen(port, function() {
    return console.log('Server listening on port ' + port + ' in ' + env + ' mode.');
});

if (require.main != module) {
    module.exports = server;
}