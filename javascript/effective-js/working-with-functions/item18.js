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

var obj2 = {
    hello: obj.hello,
    usrename: 'Boo Radley'
};
obj2.hello();

// function for sharing among multiple objects
function hello() {
    return 'hello, ' + this.username;
}

var obj1 = {
    hello: hello,
    username: 'Gordon Gekko'
}
obj1.hello();

var obj2 = {
    hello: hello,
    username: 'Biff Tannen'
}
obj2.hello();
hello();

function hello() {
    'use strict';
    return 'hello, ' + this.username;
}
hello();

function User(name, passwordHah) {
    this.name = name;
    this.passwordHah = passwordHah;
}

var u = new User('sfalken', '52590sfsfjjj00');
u.name;

// Method call provide the object to which the method property is looked up as their receiver

// Function calls provide the global object (or undefind for strict functions) as
// their reveiver. Calling methods with function call syntax is rarely useful

// Constructors are called with new and reveive a fresh object as their reveiver
