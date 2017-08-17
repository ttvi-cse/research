var myMixins = {
    moveUp: function() {
        console.log("move up");
    },
    moveDown: function() {
        console.log("move down");
    },
    stop: function() {
        console.log("stop! inthe name of love!");
    }
}
function CarAnimator() {
    this.moveLeft = function() {
        console.log("move left");
    }
}
function PersonAnimator() {
    this.moveRandomly = function() {}
}
_.extend(CarAnimator.prototype, myMixins);
_.extend(PersonAnimator.prototype, myMixins);

var myAnimator = new CarAnimator();
myAnimator.moveLeft();
myAnimator.mveDown();
myAnimator.stop();


// using your own code
var Car = function(settings) {
    this.mode = setting.model || "no model provided";
    this.color = setting.color || "no color provided";
}
var Mixin = function() {};
Mixin.prototype = {
    driveForward: function() {
        console.log("drive forward");
    },
    driveBackward: function() {
        console.log("drive backward");
    },
    driveSideWays: function() {
        console.log("drive sideways");
    }
}
function augment(receivingClass, givingClass) {
    if (arguments[2]) {
        for (var i = 2, len = arguments.length; i < len; i++) {
            receivingClass.prototype[arguments[i] = givingClass.prototype[arguments[i]];
        }
    } else {
        for (var methodName in givingClass.prototype) {
            if (!Object.hasOwnProperty.call(receivingClass.prototype, methodName)) {
                receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            }
        }
    }
}
augment(Car, Minxin, "driveForward", "driveBackward");
var myCar = new Car({
    model: "Ford EScort",
    color: "blue"
});

myCar.driveForward();
myCar.driveBackward();

augment(Car, Mixin);
var mySportsCar = new Car({
    model: "Porsche",
    color: "red"
});

mySportsCar.driveSideWays();