// Get comfortable using higher-order functions

function compareNumbers(x,y) {
    if (x < y) {
        return -1;
    } 
    if (x > y) {
        return 1;
    }
    return 0;
}

[3, 1, 4, 1, 5, 9].sort(compareNumbers);
var names = ['Fred', 'Willma', 'Pebbles'];
var upper = [];
for (var i = 0, n = names.length; i < n; i++) {
    upper[i] = names[i].toUpperCase();
}
upper;
var upper = names.map(function(name) {
    return name.toUpperCase();
});
upper;

var aIndex = 'a'.charCodeAt(0);
var alphabet = '';
for (var i = 0; i < 26; i++) {
    alphabet += String.fromCharCode(aIndex + i);
}
alphabet;

var digits = '';
for (var i = 0; i < 10; i++) {
    digits += i;
}
digits;

var random = '';
for (var i = 0; i < 8; i++) {
    random += String.fromCharCode(Math.floor(Math.random() * 26) + aIndex);
}
random;

function buildString(n, callback) {
    var result = '';
    for (var i = 0; i < n; i++) {
        result += callback(i);
    }
    return result;
}

var alphabet = buildString(26, function(i) {
    return String.fromCharCode(aIndex + i);
})
alphabet;

var digits = buildString(10, function(i) {return i;});
digits;

var randome = buildString(8, function() {
    return String.fromCharCode(Math.floor(Math.random() * 26)+ aIndex);
})
randome;

// Higher-order functions are functions that take other functons as arguments or return functions
// as thir result

// Familiarize yourself with higher-order functions in existing libraries

// Learn to detect common coding patterns that can be replaced by higher-order functions


