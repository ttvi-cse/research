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