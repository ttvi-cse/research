// Use bin to Extract Methods with a Fixed Reveiver

var buffer = {
    entries: [],
    add: function(s) {
        this.entries.push(s);
    },
    concat: function() {
        return this.entries.join('');
    }
}

var source = ['867', '-', '5309'];
// source.forEach(buffer.add);

source.forEach(buffer.add, buffer);
console.log(buffer.concat());

source.forEach(function(s) {
    buffer.add(s);
});
console.log(buffer.concat());

source.forEach(buffer.add.bind(buffer));
console.log(buffer.concat());

// call external receiver
// apply numbers of arguments
// bind object as receiver

buffer.add === buffer.add.bind(buffer);

// beware that extracting a method does not bind the method's
// receiver to its object

// when passing an object's method to a higher-order function.
// use an anomymous function to call the method on the apppropriate receiver

// use bind as a shorthand for creating a function bound to the 
// appropriate receiver


