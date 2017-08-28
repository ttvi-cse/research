function hello(username) {
    return 'hello, ' + username;
}
hello('Keyser Soze');

var obj = {
    hello: function() {
        return 'hello, ' + this.username;
    },
    username: 'Hans Gruber'
}
obj.hello();