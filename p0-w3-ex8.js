function pasanganTerbesar(num) {
/*
    bikin nilai max =0
ubah jadi string dulu
tambahin index 0 dan 1 dulu
ubah jadi angka
bandingin sama max
*/
// var num = 123456
var pasanganMax = 0
var numString = num.toString()
var testing = true
while(testing === true) {
    for( var i = 0; i < numString.length - 1; i++) {
        var pasanganAngka = ''
        pasanganAngka += numString[i] + numString[i + 1]
        pasanganAngka = Number(pasanganAngka)
        if(pasanganAngka > pasanganMax) {
            pasanganMax = pasanganAngka
        }
    }
    testing = false
    return pasanganMax
}
}


  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99