function tentukanDeretGeometri(arr) {
    var temp=0
    for(var i=0; i<arr.length-2; i++) {
      for(var j=1; j<arr.length-1; j++ ) {
        if(arr[i+1]/arr[i]==arr[j+1]/arr[j]) {
          // console.log(arr[i+1]+'/'+arr[i]+' = '+arr[j+1]+'/'+arr[j])
          temp=true
        } else {
          return false
        }
      }
      return temp
    }
  }
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false