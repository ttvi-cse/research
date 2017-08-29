function User(name, passwordHash) {
    this.name = name;
    this.passwordHash = passwordHash;
}

var u = User('barabelli', 'fsfj2jkj2jkj');
u;
this.name;
this.passwordHash;


function User(name, passwordHash) {
    'use strict';
    this.name = name;
    this.passwordHash = passwordHash;
}

var u = User('barabelli', 'fsfsfsf');

function User(name, passwordHash) {
    if (!(this instanceof User)) {
        return new User(name, passwordHash);
    }
    this.name = name;
    this.passwordHash = passwordHash;
}

function User(name, passwordHash) {
    var self = this instanceof User ? this : Object.create(User.prototype);
    self.name = name;
    self.passwordHash = passwordHash;
    return self;
}

if (typeof Object.create === 'undefined') {
    Object.create = function(protoype) {
        function C() {}
        C.prototype = prototype;
        return new C();
    }
}


// Make a constructor agnostic to its caller's syntax by reinvoking
// itself with new or with Object.create

// Document clearly when a function expects to be called with new

