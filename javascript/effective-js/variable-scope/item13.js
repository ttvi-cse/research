function wrapElements(a) {
    var result = [], i, n;
    for (i = 0, n = a.length; i < n; i++) {
        result[i] = function() { 
            return a[i]; 
        }
    }
    return result;
}
var wrapped = wrapElements([10, 20, 30, 40, 50]);
var f = wrapped[0];
f();
function wrapElements(a) {
    var result = [];
    for (var i = 0, n = a.length; i< n; i++) {
        (function() {
            var j = i;
            result[i] = function() {return a[j];}
        })();
    }
    return result;
}
function wrapElements(a) {
    var result = [];
    for (var i = 0, n = a.length; i < n; i++) {
        (function(j) {
            result[i] = function() {return a[j];};
        })(i);
    }
}

// Things to remember
// - Understand the difference between binding and assignment
// - Closures capture their outer variables by reference. not by value
// - Use immediately invoked function expressions (IIFEs) to create local
// scopes
// - Be aware of the cases where wrapping a blocks in a IIFE can change
// it's behavior
