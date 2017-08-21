DEBUG_MODE = true;
function DEBUG() {
    if (DEBUG_MODE) {
        console.log("called DEBUG function");
    }
}
var foo = (function() {
    var privateVar = 10;
    return {
        publicFunc: function() {

        },
        debug: function() {
            DEBUG();
        }
    }
}());
foo.debug();