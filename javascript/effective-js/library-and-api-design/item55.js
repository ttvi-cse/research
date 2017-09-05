// Accept Options Objects for Keyword Arguments

function Alert(parent, message, opts) {
    opts = opts || {};
    this.width = opts.width == undefined ? 320 : opts.width;
    this.height = opts.height === undefined ? 240 : opts.height;
    this.x = opts.x === undefined ? (parent.width / 2) - (this.width /2) : opts.x;
    this.y = opts.y === undefined ? (parent.height / 2) - (this.height / 2) : opts.y;
    this.title = opts.title || 'Alert';
    this.titleColor = opts.titleColor || 'gray';
    this.bgColor = opts.bgColor || 'white';
    this.textColor = opts.textColor || 'black';
    this.icon = opts.icon || 'info';
    this.modal = !!opts.model;
    this.message = message;
}

function Alert(parent, message, opts) {
    opts = extend({
        width: 320,
        height: 240
    });
    opts = extend({
        x : opts.x === undefined ? (parent.width / 2) - (this.width /2) : opts.x,
        y : opts.y === undefined ? (parent.height / 2) - (this.height / 2) : opts.y,
        title : opts.title || 'Alert',
        titleColor : opts.titleColor || 'gray',
        bgColor : opts.bgColor || 'white',
        textColor : opts.textColor || 'black',
        icon : opts.icon || 'info',
        modal : !!opts.model,
    }, opts);

    this.width = opts.width;
    this.height = opts.height;
    this.x = opts.x;
    this.y = opts.y;
    this.title = opts.title;
    this.titleColor = opts.titleColor;
    this.bgColor = opts.bgColor;
    this.textColor = opts.textColor;
    this.icon = opts.icon;
    this.modal = opts.modal;
}

function extend(target, source) {
    if (source) {
        for (var key in source) {
            var val = source[key];
            if (typeof val !== 'undefined') {
                target[key] = val;
            }
        }
    }
}

var alert = new Alert();

// Use options object's to make API's more readable and mermorable

// The arguments provided by an options object should all be treated as optinal

// Use an extend utility function to abstract out the logic of extracting 
// values from options objects


