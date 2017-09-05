"use strict"; 
function distributeGifts(map){
  //coding and coding..

  var arr = map.split('\n').map(a=>a.split(''));

  // travel alphabet

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  var distance = 0;
  var cur =  find('s');
  var old = cur;
  for (var i = 0; i < alphabet.length; i++) {
      
      // finding if alphabet is exist
    //   console.log('finding ', alphabet[i]);

      cur = find(alphabet[i]);
      if (cur !== undefined) {
          // found alphabet start caculate distance
        //   console.log('found ' + alphabet[i] + '. Start calculate ', old, cur);
          distance += countDistance(old, cur);

          old = cur;
      }
  }

  return distance;


  function find(a) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] == a) return [i,j];
        }
    }
  }
  function countDistance(a,b) {
      if (a === undefined || b === undefined) return 0;
      return Math.abs(a[0]-b[0]) + Math.abs(a[1]-b[1]);
  }
}


var map =
`.....Y....
..s.......
..........
....X.....
......Z...`;

// map =
// `X....A....
// ..s.......
// .........B
// ..........
// ......Y...`;

// map =
// `..........
// ..s.......
// ..........
// ..........
// ..........`

map =
`..........
..s.......
..........
..........
..........`

var distance = distributeGifts(map);
console.log(distance);