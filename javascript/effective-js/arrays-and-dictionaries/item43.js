var dict = {alice: 34, bob: 24, chris: 62  };
var people = [];

for (var name in dict) {
    people.push(name + ': ' + dict[name]);
}

people;

function NativeDict() {

}

NativeDict.prototype.count = function() {
    var i = 0;
    for (var name in this) {
        i++;
    }
    return i;
}

NativeDict.prototype.toString = function() {
    return '[object NativeDict]';
}

var dict = new NativeDict();
dict.alice = 34;
dict.bob = 24;
dict.chris = 62;

console.log(dict.count);