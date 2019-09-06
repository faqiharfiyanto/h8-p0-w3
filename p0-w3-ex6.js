function angkaPalindrome(num) {
    while(true) {
        num++
        var temp1=num.toString()
        var temp2=''
        for(var i=temp1.length-1; i>-1; i--) {
            temp2+=temp1[i]
        }
        if(temp2==temp1) {
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