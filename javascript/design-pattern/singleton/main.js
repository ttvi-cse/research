var mySingleton = (function() {
    var instance;
    function init() {
        // Singleton

        // Private methods and variables
        function privateMethod() {
            console.log("I am private");
        }

        var privateVariable = "Im also private";
        var privateRandomNumber = Math.random();
        return {
            publicMethod: function() {
                console.log("The public can see me!");
            },
            publicProperty: "I am also public",
            getRandomeNumber: function() {
                return privateRandomNumber;
            }
        }
    }
    return {
        getInstance: function() {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    }
})();

var SingletonTestter = (function() {
    function Singleton(options) {
        options = options || {};
        this.name = "SingletonTeseter";
        this.pointX = options.pointX || 6;
        this.pointY = options.pointY || 10;
    }
    var instance;
    var _static = {
        name: "singletonTester",
        getInstance: function(options) {
            if(instance === undefined) {
                instance = new Singleton(options);
            }
            return instance;
        }
    }

    return _static;
})();

var singletonTest = SingletonTestter.getInstance({pointX: 5});

console.log(singletonTest.pointX);