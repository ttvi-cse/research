function isWinner(player, others) {
    var highest = 0;
    for (var i = 0, n = others.length; i < n; i++) {
        var player = others[i];
        if (player.score > highest) {
            highest = player.score;
        }
    }
    return player.score > highest;
}

function test() {
    var x = "var", result = [];
    result.push(x);
    try {
        throw "exception";
    } catch (x) {
        x = "catch";
    }
    result.push(x);
    return result;
}
test();

// Things to remember
// - Variable declarations within a block are implicitly hoisted 
// to the top of their enclosing function.
// - Redeclarations of a variable are treated as a single variable.
// - Consider manually hoisting local variable declarations to avoid
// confusion
