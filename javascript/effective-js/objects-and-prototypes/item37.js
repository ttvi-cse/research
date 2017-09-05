// Recognie the Impicit Binding of this

function CSVReader(separators) {
    this.separators = separators || [','];
    this.regexp = new RegExp(this.seperators.map(function(sep) {
        return '\\' + sep[0];
    }).join('|'));
}

CSVReader.prototype.read = function(str) {
    var lines = str.trim().split(/\n/);
    return lines.map(function(line) {
        return line.split(this.regex);
    });
}

var reader = new CSVReader();
reader.read('a,b,c\nd,e,f\n');


// the scope of this is always determined by its nearest enclosing
// function

// use a local variable, usually called self, me, or that, to make a this- binding
// available to inner functions


