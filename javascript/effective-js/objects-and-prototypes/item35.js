function User(name, passwordHash) {
    this.toString = function() {
        return '[User ' + name + ']';
    }
    this.checkPassword = function(password) {
        return hash(password) === passwordHash;
    }
}

/**
 * A downside to this pattern is that, in order for the variables of the
 * constructor to be in scope of the methods that use them, the methods
 * must be placed on the instance object.
 */

 // closure variables are private, accessible only to local references

 // Use local variables as private data to enforce information hiding within methods

 