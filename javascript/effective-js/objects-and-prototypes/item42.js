// Avoid Reckless Monkey-Patching

Array.prototype.split = function(i) {
    return [this.slice(0,i), this.slice(i)]
}
Array.prototype.split = function() {
    var i = Math.floor(this.length / 2);
    return [this.slice(0, i), this.slice(i)];
}

if (typeof Array.prototype.map !== 'function') {
    Array.prototype.map = function(f, thisArg) {
        var result = [];
        for (var i = 0, n = this.length; i < n; i++) {
            result[i] = f.call(thisArg, this[i], i);
        }
        return result;
    }
}

var arr = [1,2,3,4];
arr.split(2);

// Avoid reckless monkey-patching

// Document any monkey-patching performed by a library

// Consider making monkey-patching optional by performing the 
// modifications in an exported function

// Use monkey-patching to provide polyfills for missing standard APIs
