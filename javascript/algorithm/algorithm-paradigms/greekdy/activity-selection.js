var s = [1,3,0,5,8,5];
var f = [2,4,6,7,9,9];

var i = 0;
console.log(i);

for (var j = 1, n = s.length; j < n; j++) {
    if (s[j] >= f[i]) {
        console.log(j);
        i = j;
    }
}

var arr = [[5,9], [1,2], [3,4], [0,6], [5,7], [8,9]];
arr.sort((a,b) => a[1] - b[1]);
var i = 0;
console.log('('+arr[i][0] + ',' + arr[i][1] + ')');

for (var j = 1; j < n; j++) {
    if (arr[j][0] >= arr[i][1]) {
        console.log('('+arr[j][0] + ',' + arr[j][1] + ')');
        i = j;
    }
}
