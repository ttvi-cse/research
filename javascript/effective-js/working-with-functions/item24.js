// use a variable to save a reference to arguments

var it = values(1,4,1,4,2,1,3,5,6);
console.log(it.next());
console.log(it.next());
console.log(it.next());

function values() {
    var i = 0, n = arguments.length;
    return {
        hasNext: function() {
            return i < n;
        },
        next: function() {
            if (i >= n) {
                throw new Error('end of iteration');
            } 
            return arguments[i++]; // wrong arguments
        }
    }
}
function values() {
    var i = 0, n = arguments.length, a = arguments;
    return {
        hasNext: function() {
            return i < n;
        },
        next: function() {
            if (i >= n) {
                throw new Error('end of iteration');
            }
            return a[i++];
        }
    }
}

// be aware of the function nesting level when referring to arguments

// bind an explicitly scoped reference to arguments in order to refer
// to it from nested function
