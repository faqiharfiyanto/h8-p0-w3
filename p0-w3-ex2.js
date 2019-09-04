function balikString (str) {
    var temp=""
    for(var i=str.length-1; i>-1; i--) {
        temp+=str[i]
    }
    return temp
}
console.log(balikString("hello world!"))