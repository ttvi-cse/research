(function() {
    var carManager = {
        requestInfo: function(model, id) {
            return "The information for " + model + " with ID " + id + " is foobar";
        },
        buyVehicle: function(model, id) {
            return "You have successfully purchased Item " + id + ", a " + model;
        },
        arrangeViewing: function(model, id) {
            return "You have successfully booked a viewing of " + model + " ( " + id + " ) ";
        }
    }
})();

carManager.execute("buyVehicle", "Ford Escort", "453543");
carManager.execute = function (name) {
    return carManager[name] && carManager[name].apply(carManager, [].slice.call(arguments,1));
}
carManager.execute("arrangeViewing", "Ferrari", "14523");