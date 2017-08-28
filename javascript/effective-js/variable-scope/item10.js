function status(info) {
    var widget = new widget();
    with(widget) {
        setBackground('blue');
        setForeground('white');
        setText('Status: ' + info);
        show();
    }
}

function f(x, y) {
    with (Math) {
        return min(round(x), sqrt(y));
    }
}