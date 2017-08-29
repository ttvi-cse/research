// Avoid relying on the toString method of functions

var s = (function(x) {
    return x + 1;
}).toString();

console.log(s);

// javascript engines are not required to produce accurate reflections
// of function source code via toString

// never rely on precise details of function source since different
// engines may produce different result from toString

// the results of toString do not expose the values of local variables 
// stored in a closure

// In general, avoid using toString on functions

// less consider

