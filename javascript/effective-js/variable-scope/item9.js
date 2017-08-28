function swap(a, i, j) {
    console.log(this);
    temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}
function A() {
    console.log(this);
    this.a = [];
}
var a = [1,2];
swap(a, 0, 1);