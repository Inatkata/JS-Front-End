//function solve(array, rotations) {
//    for (let i = 0; i < rotations; i++) {
//       array.push(array.shift())
//    }
//    console.log(array.join(' '))
//}


function solve(array, rotations) {
    for (let i = 0; i < rotations; i++) {
      let rotattedElement = []
      let firstElement = array[0]
      for (let j = 1; j < array.length; j++) {
        rotattedElement[j - 1] = array[j]
      }
      rotattedElement[rotattedElement.length]= firstElement
      array = rotattedElement
    }
    console.log(array.join(' '))
}
