/*
Logic Challenge - Target Terdekat
Problem
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.

Code
*/
function targetTerdekat(arr) {
  var jarak = 0
  for(var i=0; i<arr.length; i++) {
    if(arr[i]=='o') {
      for(var j=0; j<arr.length; j++) {
        if(arr[j]=='o') {
          jarak = 0
        } else if(arr[j]==' ') {
          jarak ++
        } else if(arr[j]=='x') {
          jarak ++
          return jarak
        }
      } 
      return 0;     
    } else if(arr[i]=='x') {
      for(var k=0; k<arr.length; k++) {
        if(arr[k]=='x') {
          jarak = 0;
        } else if(arr[k]==' ') {
          jarak ++
        } else if(arr[k]=='o') {
          jarak ++
          return jarak
        }
      }
      return 0;
    }
  }
}
// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2

