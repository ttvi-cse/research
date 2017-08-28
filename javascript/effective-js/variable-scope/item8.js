var i, n, sum;

console.log(this);

function averageScore(players) {
    var i, n, sum;
    sum = 0;
    for (i = 0, n = players.length; i < n; i++) {
        sum += score(players[i]);
    }
    return sum / n;
}

function score(player) {
    var i, n, sum;
    sum = 0;
    for (i = 0, n = player.levels.length; i < n; i++) {
        sum += player.levels[i].score;
    }
    return sum;
}

function Player(levels) {
    this.levels = levels;
}

function Level(score) {
    this.score = score;
}

function players() {
    var players = [];
    for (var i = 0; i < 10; i++) {
        var levels = [];
        for (var j = 0; j < 20; j++) {
            levels.push(new Level(j));
        }
        var player = new Player(levels);
        players.push(player)
    }
    return players;
}
var players = players();
averageScore(players);