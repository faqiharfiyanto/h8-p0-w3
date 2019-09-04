function angkaPalindrome(num) {
    var temp1=true
    while(temp1) {
        num++
        var temp2=num.toString()
        var temp3=""
        for(var i=temp2.length-1; i>-1; i--) {
            temp3+=temp2[i]
            }
        if(temp3==temp2) {
                return num
        }
    }
}
  
// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001