// Store Methods on Prototypes

function User(name, passwordHash) {
    this.name = name;
    this.passwordHash = passwordHash;
}

User.prototype.toString = function() {
    return '[User ' + this.name + ']';
}
User.prototype.checkPassword = function(password) {
    return hash(password) === this.passwordHash;
}

var u1 = new User();
var u2 = new User();
var u3 = new User();


// Storing methods on instance objects creates multiple copies of the 
// functions, one per instance object

// Prefer storing methods on prototypes over storing them on instance
// objects

