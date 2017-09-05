/**
 * Iterators
 */

/**
 * Generators
 */

/**
 * Modules
 */
function Hello(name) {
    function greeting() {
        console.log("Hello " + name + "!");
    }
    // public API
    return {
        greeting : greeting
    }
}
var me = Hello('Kyle');
me.greeting();

var me = (function Hello(name) {
    function greeting() {
        console.log('Hello ' + name + '!');
    }
    return {
        greeting: greeting
    }
})('Kyle');
me.greeting();

export function foo() {

}

export var awesome = 42;

var bar = [1,2,3];
export {bar};

function foo() {

}

var awesome = 42;
var bar = [1,2,3];

export { foo, awesome, bar };

// Circular module dependency
// A imports B, B imports A. 

import bar from "B";

export default function foo(x) {
    if (x > 10) return bar( x - 1);
    return x * 2;
}

import foo from "A";

export default function bar(y) {
    if (y > 5) return foo( y / 2 );
    return y * 3;
}

// Module Loading


/**
 * Classes
 */
class Foo {
    constructor(a,b) {
        this.x = a;
        this.y = b;
    }
    gimmeXY() {
        return this.x * this.y;
    }
}

function Foo(a,b) {
    this.x = a;
    this.y = b;
}
Foo.prototype.gimmeXY = function() {
    return this.x * this.y;
}

var f = new Foo(5, 15);
f.x;
f.y;
f.gimmeXY();

// Foo.call(obj) will not work
// class Foo is not hoisted
// class Foo in the top global scope creates a lexical Foo identifier in that scope
// but unlike function Foo does not create a global object property of that name

// extends and super
class Bar extends Foo {
    constructor (a,b,c) {
        super(a,b);
        this.z = c;
    }
    gimmeXYZ() {
        return super.gimmeXY() * this.Z;
    }
}

var b  = new Bar(5,15,25);
b.x;
b.y;
b.z;
b.gimmeXYZ();

class parentA {
    constructor() {this.id = 'a';}
    foo() {console.log('ParentA:', this.id);}
}
class Parent3 {
    constructor() {this.id = 'b';}
    foo() {console.log('ParentB: ', this.id);}
}
class ChildA extends ParentA {
    foo() {
        super.foo();
        console.log('ChildA:', this.id);
    }
}
class ChildB extends ParentB {
    foo() {
        super.foo();
        console.log('Childb:', this.id);
    }
}
var a = new ChildA();
a.foo();

var b = new ChildB();
b.foo();

b.foo.call(a);

class C {
    constructor(...args) {
        super(...args);
    }
}

function Foo() {
    this.a = 1;
}

function Bar() {
    this.b = 2;
    Foo.call(this);
}

// Bar extends Foo
Bar.prototype = Object.create(Foo.prototype);

class Foo {
    constructor() {this.a = 1;}
}
class Bar extends Foo {
    constructor() {
        this.b = 2;
        super();
    }
}

// static
class Foo {
    static cool() {console.log('cool')}
    wow() {console.log('wow')}
}
class Bar extends Foo {
    static awesome() {
        super.cool();
        console.log('awesome');
    }
    neat() {
        super.wow();
        console.log('nead');
    }
}
Foo.cool();
Bar.cool();
Bar.awesome();

var b = new Bar();
b.neat();
b.awesome;
b.cool;