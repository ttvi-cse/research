function ObserverList() {
    this.observerList = [];
}

ObserverList.prototype.add = function(obj) {
    return this.observerList.push(obj);
}
ObserverList.prototype.count = function() {
    return this.observerList.length;
}
ObserverList.prototype.get = function(index) {
    if (index > -1 && index < this.observerList.length) {
        return this.observerList[index];
    }
}
ObserList.prototype.indexOf = function(obj, startIndex) {
    var i = startIndex;
    while (i < this.observerList.length) {
        if (this.observerList[i] == obj) {
            return i;
        }
        i++;
    }
    return -1;
}
ObserverList.prototype.removeAt = function(index) {
    this.observerList.splice(index, 1);
}


function Subject() {
    this.observers = new ObserverList();
}
Subject.prototype.addObserver = function(observer) {
    this.observers.add(observer);
}
Subject.prototype.removeObserver = function(observer) {
    this.observers.removeAt(this.observers.indexOf(observer));
}
Subject.prototype.notify = function(context) {
    var observerCount = this.ovservers.count();
    for (var i = 0; i < observerCount; i++) {
        this.observers.get(i).update(context);
    }
}
function Observer() {
    this.update = function() {
        console.log("calling observer update function!");
    }
}