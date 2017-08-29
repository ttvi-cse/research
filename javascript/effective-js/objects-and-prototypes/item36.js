// Store instance state only on Instance Objects

function Tree(x) {
    this.value = x;
}


Tree.prototype = {
    children: [],
    addChild: function(x) {
        this.children.push(x);
    }
}

var left = new Tree(2);
left.addChild(2);
left.addChild(3);

var right = new Tree(6);
right.addChild(3);
right.addChild(7);

var top = new Tree(4);
top.addChild(left);
top.addChild(right);
top.children;

function Tree(x) {
    this.value = x;
    this.children = [];
}
Tree.prototype = {
    addChild: function(x) {
        this.children.push(x);
    }
}

// mutable data can be problematic when shared, and prototypes are
// shared between alll their instance

// Store mutable per-instance state on instance objects

