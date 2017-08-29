function callMethod(obj, method) {
    var shift = [].shift;
    shift.call(arguments);
    shift.call(arguments);
    return obj[method].apply(obj, arguments);
}

var obj = {
    add: function(x, y) {return x + y;}
}
callMethod(obj, 'add', 17, 25);
// error: cannot read property 'apply' of undefined

function strict(x) {
    'use strict'
    arguments[0] = 'modified';
    return x === arguments[0];
}
function nonstrict(x) {
    arguments[0] = 'modified';
    return x === arguments[0];
}
strict('unmodified');
nonstrict('unmodified');

function callMethod(obj, method) {
    var args = [].slice.call(arguments, 2);
    return obj[method].apply(obj, args);
}
var obj = {
    add: function(x, y) { return x + y; }
}
callMethod(obj, 'add', 17, 25);

// never modify the arguments object

// copy the arguments object to a real array using [].slice.call(arguments)
// before modifying it