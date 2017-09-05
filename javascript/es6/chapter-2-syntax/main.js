// block-scoped declarations
// let declarations
var a = 2;
(function IIFE() {
    var a = 3;
    console.log(a);
})();

console.log(a);

var a = 2;
{
    let a = 3;
    console.log(a);
}
console.log(a);
// const declarations

// Block-scoped Functions
if (true) {
    function foo() {
        console.log('1');
    }
} else {
    function foo() {
        console.log('2');
    }
}
foo();

// Spead/Rest

function foo(x,y,z) {
    console.log(x,y,z);
}
foo(...[1,2,3])

foo.apply(null, [1,2,3]);
var a = [2,3,4];
var b = [1, ...a, 5];
console.log(b);
function foo(x,y,...z) { // zip python
    console.log(x,y,z);
}

function foo(...args) {
    args.shift();
    console.log(...args);
}
function bar() {
    var args = Array.prototype.slice.call(arguments);
    args.push(4,5);
    args = args.filter(v => v % 2 == 0);
    foo.apply(null, args);
}
bar (0,1,2,3);


// default parameter values
function foo(x,y) {
    x = (x !== undefined) ? x : 11;
    y = (y !== undefined) ? y : 31;
    console.log(x + y);
}
foo(0, 42);
foo(undefined, 6);
function foo(x, y) {
    x = (0 in arguments) ? x : 11;
    y = (1 in arguments) ? y : 31;
    console.log(x + y);
}
foo (5);
foo (5, undefined);

function foo1(x = 11, y = 31) {
    console.log(x + y);
}

foo1();
// default value expression
function bar(val) {
    console.log('bar called!');
    return y + val;
}
function foo2(x = y + 3, z = bar(x)) {
    console.log(x, z);
}
var y = 5;
foo2();
foo2(10);
y = 6;
foo2(undefined, 10);


/**
 * Destructuring
 */
function foo3() {
    return [1,2,3];
}
var tmp = foo3(), a = tmp[0], b = tmp[1], c = tmp[2];
function bar3() {
    return {
        x: 4,
        y: 5,
        z: 6
    }
}
var tmp = bar3(),
    x = tmp.x, y = tmp.y, z = tmp.z;
console.log(x,y,z);
var [a, b, c] = foo3();
var {x: x, y: y, z: z} = bar3();

console.log(a,b,c);
console.log(x,y,z);

// Object property assignment pattern
var {x, y, z} = bar();
console.log(x, y, z);

// Not Just declarations

// Repeat assignments

// Default value assignment

// Nested Destructuring

// Destructuring Parameters

/**
 * Object Literal Extensions
 */
// Concise Properties
var x = 2, y = 3,
    o = {
        x: x,
        y: y
    };
var x = 2, y = 3,
    o = {x,y};
console.log(o);
// concise methods
var o = {
    x: function() {

    },
    y: function() {

    }
}
var o = {
    x() {

    },
    y() {

    }
}
// concisely unnamed
// es5 getter/setter
var  o = {
    __id : 10,
    get id() { return this.__id++; },
    set id(v) { this.__id = v; }
}
o.id;
o.id;
o.id = 20;
o.id

o.__id;
o.__id;

/**
 * Computed Property Names
 */

/**
 * Object super
*/

/**
 * Template Literals
 */
var name = 'Kyle';
var greeting = 'Hello ' + name + '!';

console.log(greeting);
console.log(typeof greeting);

var name = 'Kyle';
var greeting = `Hello ${name}`;
console.log(greeting);
console.log(typeof greeting); 

/**
* Interpolated Expressions
*/
// expression scope

// Tagged Template Literals
// Raw String

/**
 * Arrow Functions
 */

 // Not just shorter syntax, But this
var controller = {
    makeRequest = function() {
        var self = this;
        btn.addEvenListener('click', function() {
            self.makeRequest();
        }, false);
    }
}
var controller = {
    makeRequest: function() {
        btn.addEvenListener('click', () => {
            this.makeRequest();
        }, false);
    }
}
var controller = {
    makeRequest: () => {
        this.helper();
    },
    helper: () => {

    }
}
controller.makeRequest();
/**
 * for ..of loops
*/

/**
 * Regular Expressions
 */
// Sticky flag

/**
 * Regular Expression flags
 */

/**
* Number Literal
*/

/**
 * Symbol
 */

/**
 * Unicode
 */