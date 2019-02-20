function angkaPalindrome(num) {    
    var num2 = false
    while(num2 === false) {
        num++
        var angkaString = num.toString()
        var temp = ''
        for(var i = angkaString.length - 1; i >= 0; i--) {
            temp += angkaString[i]
            if(temp === angkaString) {
                return Number(temp)
            }
        }
    }
}
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001