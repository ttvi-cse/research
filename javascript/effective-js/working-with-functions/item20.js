// Use call to Call Methods with a custom receiver

obj.temporary = f;
var result = obj.temporary(arg1, arg2, arg3);
delete obj.temporary;

f.call(obj, arg1, arg2, arg3);

dict.hasOwnProperty = 1;
dict.hasOwnProperty('foo');

var hasOwnProperty = {}.hasOwnProperty;
dict.foo = 1;
delete dict.hasOwnProperty;
hasOwnProperty.call(dict, 'foo');
hasOwnProperty.call(dict, 'hasOwnProperty');

var table = {
    entries: [],
    addEntry: function(key, value) {
        this.entries.push({key: key, value: value});
    },
    forEach: function(f, thisArg) {
        var entries = this.entries;
        for (var i = 0, n = entries.length; i < n; i++) {
            var entry = entries[i];
            f.call(thisArg, entry.key, entry.value, i);
        }
    }
}

table1.forEach(table2.addEntry, table2);

// use the call method to call a function with a custom receiver

// use the call method for calling methods that may not exist on a given object

// use the call method for defining higher-order functions
// that allow clients to provide a receiver for the callback
