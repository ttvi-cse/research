/**
 * The idea was that the decoration itself wasn't essential to the base functionality of the class,
 * otherwise it would be baked into the superclass itself.
 * A common reason why developers use them is their applications may contain features requiring a large quantity
 * of distinct types of object.
 */
function Vehicle(vehicleType) {
    this.vehicleType = vehicleType || "car";
    this.model = "default";
    this.license = "00000-000";
}
var testInstance = new Vehicle("car");
console.log(testInstance);

var truck = new Vehicle("truck");
truck.setModel = function(modelName) {
    this.model = modelName;
}

truck.setColor = function(color) {
    this.color = color;
}

truck.setmodel("CAT");
truck.setColor("blue");

console.log(truck);

var secondInstance = new Vehicle("car");
console.log(secondInstance);


function MacBook() {
    this.cost = function() {return 997;}
    this.screenSize = function() {return 11.6;}
}
function memory(macbook) {
    var v = macbook.cost();
    macbook.cost = function() {
        return v + 75;
    }
}
function engraving(macbook) {
    var v = macbook.cost();
    macbook.cost = function() {
        return v + 200;
    }
}
function insurance(macbook) {
    var v = macbook.cost();
    macbook.cost = function() {
        return v + 250;
    }
}
var mb = new MacBook();
memory(mb);
engraving(mb);
insurance(mb);

console.log(mb.cost());
console.log(mb.screenSize());

var reminder = new Interface("List", ["summary", "placeOrder"]);
var properties = {
    name: "Remember to buy the milk",
    date: "05/06/2016",
    actions: {
        summary: function() {
            return "Remember to buy the milk, we are almost out!";
        },
        placeOrder: function() {
            return "Ordering milk from your local grocery store";
        }
    }
}
function Todo(config) {
    Interface.ensureImplements(config.actions, reminder);
    this.name = config.name;
    this.methods = config.actions;
}

var todoItem = new Todo(properties);
console.log(todoItem.methods.summary());
console.log(todoItem.methods.placeOrder());

var Macbook = new Interface("Macbook", ["addEngraving", "addParallels", "add4GBRam", "add8GBRam", "addCase"]);

var MacbookPro = function() {

}

MacbookPro.prototype = {
    addEngraving: function() {},
    addParallels: function() {},
    add4GBRam: function() {},
    add8GBRam: function() {},
    addCase: function() {},
    getPrice: function() {
        return 900.00;
    }
}

var MacbookDecorator = function(macbook) {
    Interface.ensureImplements(macbook, Macbook);
    this.macbook = macbook;
}

MacbookDecorator.prototype = {
    addEngraving: function() {
        return this.macbook.addEngraving();
    },
    addParallels: function() {
        return this.macbook.addParallels();
    },
    add4GBRam: function() {
        return this.macbook.add4GBRam();
    },
    // ...
    getPrice: function() {
        return this.macbook.getPrice();
    }
}

function extend(a,b) {
    for (var key in b) {
        if (b.hasOwnProperty(key)) {
            a[key] = b[key];
        }
    }
    return a;
}
var CaseDecorator = function(macbook) {
    this.macbook = macbook;
}

extend(CaseDecorator, MacbookDecorator);
CaseDecorator.prototype.addCase = function() {
    return this.macbook.addCase() + "Adding case to macbook";
}
CaseDecorator.prototype.getPrice = function() {
    return this.macbook.getPrice() + 45.00;
}