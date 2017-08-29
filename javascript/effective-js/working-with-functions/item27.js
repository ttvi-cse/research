// Prefer closures to strings for encapsulating code

function repeat(n, action) {
    for (var i = 0; i < n; i++) {
        eval(action);
    }
}

var start = [], end = [], timings = [];
repeat(1000, 'start.push(Date.now()); f(); end.push(Date.now());');
for (var i = 0, n = start.length; i < n; i++) {
    timings[i] = end[i] - start[i];
}

// never include local references in strings when send them to APIs
// that execute them with eval

// prefer APIs that accept functions to call rather than string to eval 

// less consider