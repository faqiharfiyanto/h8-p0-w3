function pasanganTerbesar(num) {
    var num2=num.toString()
    var max=0
    for(var i=0; i<num2.length-1; i++) {
        var couple=""
        couple+=(num2[i]+num2[i+1])
        if(couple>max) {
            max=couple
        }
    }
    return max
}
  
// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99