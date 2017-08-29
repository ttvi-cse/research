// Use bind to curry functions

function simpleURL(protocol, domain, path) {
    return protocol + '://' + domain + '/' + path;
}

var paths = ['a', 'b', 'c'];
var siteDomain = 'google.com';

var urls = paths.map(function(path) {
    return simpleURL('http', siteDomain, path);
})

var urls = paths.map(simpleURL.bind(null, 'http', siteDomain));
console.log(urls); 

// use bind to curry a function, that is, to create a delegating function
// with a fixed subset of the required arguments

// pass null or undefined as the receiver argument to 
// curry a function that ignores its receiver

