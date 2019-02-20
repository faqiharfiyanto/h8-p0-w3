function groupAnimals(animals) {
    var result = []
    var abjad = 'abcdefghijklmnopqrstuvwxyz'
    for(var i = 0; i < abjad.length; i++) {
        var tampung = []
        for(var j = 0; j < animals.length; j++) {
            if(animals[j][0] === abjad[i]) {
                tampung.push(animals[j])
            }
        }
        if(tampung.length > 0) {
            result.push(tampung)
        }
    }
    return result
}
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
//  [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]