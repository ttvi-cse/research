// Use apply to Call Functions with Different Numbers of Arguments

function averageOfArray() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum / arguments.length;
}

function getAllScores() {
    return [1,2,3,4,5,6,7,8,9];
}
var scores = getAllScores();
var avg1 = averageOfArray(scores);
console.log(avg1);
var avg2 = averageOfArray.apply(null, scores);
console.log(avg2);

var buffer = {
    state: [],
    append: function() {
        for (var i = 0, n = arguments.length; i < n; i++) {
            this.state.push(arguments[i]);
        }
    }
}
buffer.append('Hello, ');
buffer.append(firstName, ' ', lastName, '!');
buffer.append(newline);

buffer.append.apply(buffer, getInputStrings());

// use the apply method to call variadic functions with a computed
// array of arguments

// use the first argument of apply to provide a receiver for
// variadic methos

