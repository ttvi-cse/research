// Never Reuse Superclass Property Names

function Actor(scene, x, y) {
    this.scene = scene;
    this.x = x;
    this.y = y;
    // this.id = ++Actor.nextID;
    // scene.register(this);
    this.actorID = ++Actor.nextID;
}

Actor.nextID = 0;

function Alien(scene, x, y, direction, speed, strength) {
    Actor.call(this, scene, x, y);
    this.direction = direction;
    this.speed = speed;
    this.strength = strength;
    this.damage = 0;
    // this.id = ++Alien.nextID;
    this.alienID = ++Alien.nextID; // distinct from actorID
}
Alien.nextID = 0;

var alien = new Alien();

// be aware of all property names used by your superclasses

// never reuse a superclass property name in a subclass