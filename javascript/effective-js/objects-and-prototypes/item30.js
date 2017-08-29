function User(name, passwordHash) {
    this.name = name;
    this.passwordHash = passwordHash;
}

User.prototype.toString  = function() {
    return '[User ' + this.name + ']';
}

User.prototype.checkPassword = function(password) {
    return hash(password) === this.passwordHash;
}

function hash(s) {
    return String.prototype.toUpperCase.call(s);
}

console.log(hash('afaf'));

var u = new User('sfalken', "fsfsfsfsnn3333333");
console.log(u.toString());
console.log(u.checkPassword(hash('fsfsfsfsnn3333333')));

/// Some enviroments produce a nonstandard mechanism for retrieving
// the prototype of an object via a special __proto__ property

u.__proto__ === User.prorotype;

// C.prototype determines the prototype of objects created by new C()

// Object.getPrototypeOf(obj) is the standard ES5 function for retieving the 
// prototype of an Object

// obj.___proto__ is a nonstandard mechanism for retieving the prototype
// of an object

// a class is a design pattern consisting of a constructor function and
// an associated prototype


if (typeof Object.getPrototypeOf === 'undefined') {
    Object.getPrototypeOf = function(obj) {
        var t = typeof obj;
        if (!obj || t !== 'object' && t !== 'function') {
            throw new TypeError('not an object');
        }
        return obj.__proto__;
    }
}

// prefer the standards-compliant Object.getPrototypeOf to the
// non-standard __proto__ property

// implement Object.getPrototypeOf in non-ES5 enviroments that 
// support __proto__