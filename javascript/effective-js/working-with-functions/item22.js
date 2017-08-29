// Use arguments to create variadic functions

function averaggeOfArray(a) {
    for (var i = 0, sum = 0, n = a.length; i < n; i++) {
        sum += a[i];
    }
    return sum / n;
}
averageOfArray([2,7,1,8,2,8,1,8]);

function average() {
    for (var i = 0, sum = 0, n = arguments.length; i < n; i++) {
        sum += arguments[i];
    }
    return sum / n;
}

function average() {
    return averageOfArray(arguments);
}

// Use the implicit arguments object to implement variable-artity
// function

// consider providing additional fixed-arity versions of