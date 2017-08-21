function makeSandwich() {
    var magicIngredient = "peaanut butter";
    function make(filling) {
        return magicIngredient + " and " + filling;
    }
    return make("jelly");
}
makeSandwich();

function sandwichMaker() {
    var magicIngredient = "peanut butter";
    function make(filling) {
        return magicIngredient + " and " + filling;
    }
    return make;
}
var f = sandwichMaker();
f("jelly");
f("bananas");
f("marshmallows");

function sandwichMaker(magicIngredient) {
    function make(filling) {
        return magicIngredient + " and " + filling;
    }
    return make;
}
var hamAnd = sandwichMaker("ham");
hamAnd("chesse");
hamdAnd("mustart");
var turkeyAnd = sandwichMaker("turkey");
turkeyAnd("Swiss");
turkeyAnd("Provolone");

function box() {
    var val = undefined;
    return {
        set: function(newVal) {val = newVal;},
        get: function() { return val; },
        type: function() { return typeof val; }
    }
}
var b = box();
b.type();
b.set(98.6);
b.get();
b.type();

// Things to Remember
// - Functions can refer to variables defined in outer scopes.
// - Closures can outlive the function that creates them
// - Closures internally store references to their outer variables, and
// can both read and update their stored variables.

