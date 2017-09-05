// Avoid Inheriting from Standard Classes

function Dir(path, entries) {
    this.path = path;
    for (var i = 0, n = entries.length; i < n; i++) {
        this[i] = entries[i];
    }
}

Dir.prototype = Object.create(Array.prototype);

var dir = new Dir('/tmp/mysite', ['index.html', 'script.js', 'style.css']);
console.log(dir.length);

// Invisible internal property called [[Class]]

// Inheriting from standard classes tends to break due to special
// internal properties such as [[Class]]

// Prefer delegating to properties instead of inheriting from standard classes

