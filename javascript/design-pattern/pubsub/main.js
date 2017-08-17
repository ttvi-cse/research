var pubsub = {};
(function(myObject) {
    // Storage for topics that can be broadcast
    // or listened to
    var topics = {};
    // A topic identifier
    var subUid = -1;
    myObject.publish = function(topic, args) {
        if (!topics[topic]) {
            return false;
        }
        var subcribers = topics[topic];
        var len = subcribers ? subcribers.length : 0;
        while (len--) {
            subcribers[len].func(topic, args);
        }
        return this;
    }
    myObject.subscribe = function(topic, func) {
        if (!topics[topic]) {
            topics[topic] = [];
        }
        var token = (++subUid).toString();
        topics[topic].push({
            token: token,
            func: func
        });
        return token
    }
    myObject.unsubscribe = function(token) {
        for (var m in topics) {
            if (topics[m]) {
                for (var i = 0; j = topics[m].length; i++) {
                    if (topics[m][i].token == token) {
                        topics[m].splice(i,1);
                        return token;
                    }
                }
            }
        }
    }
}(pubsub));

var messageLogger = function(topics, data) {
    console.log("Logging: " + topics + ": " + data);
}
var subscription = pubsub.subscribe("inbox/newMessage", messagelogger);
pubsub.publish("inbox/newMessage", ["test", "a", "b", "c"]);
pubsub.pushlish("inbox/newMessage", {
    sender: "hello@google.com",
    body: "Hey again!"
});
pubsub.unsubscribe(subscription);
pubsub.publish("inbox/newMessage", "Hello! are you still there?");


var getCurrentTime = function() {
    var date = new Date(),
        m = date.getMonth() + 1,
        d = date.getDate(),
        y = date.getFullYear(),
        t = date.toLocaleTimeString().toLowerCase();

        return (m + "/" + d + "/" + y + " " + t);
}

function addGridRow(data) {
    console.log("updated grid component with: " + data);
}

function updateCounter(data) {
    console.log("data last updated at: " + getCurrentTime() + " with " + data);
}

var gridUpdate = function(topic, data) {
    if (data !== undefined) {
        addGridRow(data);
        updateCounter(data);
    }
};

var subscriber = pubsub.subscribe("newDataAvailable", gridUpdate);

pubsub.publish("newDataAvailable", {
    summary: "Apple made $5 billion",
    identifier: "APPL",
    stockPrice: 570.91
});

pubsub.publish("newDataAvailable", {
    summary: "Microsoft made $20 million",
    identifier: "MSFT",
    stockPrice: 30.85
})
