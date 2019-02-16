var penampung = ''
function balikString(input) {
    for(var i = input.length -1; i >= 0; i--) {
        penampung += input[i]
    } return penampung
} console.log(balikString('Hello World!'))