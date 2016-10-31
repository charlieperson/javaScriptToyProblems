// function powerSet (string) {
//   var sorted = string.split('').sort()
//   var solution = ['']

//   console.log(sorted, '---------------------------')

//   for(var i=0; i<sorted.length; i++) {
//     solution.push(sorted[i])
//     for(var j=0; j<sorted.length; j++) {
//       if(sorted[j] !== sorted[i]) {
//         for(var g=0; g<sorted.length; count--) {

//         }
//         solution.push(sorted[i] + sorted[j])
//       }
//     }

//     console.log(solution)
//   }
// }


// function powerSet (string) {
//   var sorted = string.split('').sort()
//   var solution = ['']

//   console.log(sorted, '---------------------------')

//   for(var i=0; i<sorted.length; i++) {
//     solution.push(sorted[i])
//     for(var j=0; j<sorted.length; j++) {
//       for(var g=0; g<sorted.length; g++) {
//         sorted.slice(g)
//       }
//       solution.push(sorted[i] + sorted[j])
//     }

//     console.log(solution)
//   }
// }


function powerSet (string) {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~', string)

  var sorted = string.split('').sort()
  var solution = ['']
  var bank = {}

  for(var i=0; i<sorted.length; i++) {
    solution.push(sorted[i])
    for(var g=1; g<=sorted.length; g++) {
      if(sorted[g] !== sorted[i]) {
        var string = sorted.slice(0, g).join('')
        solution.push(string)
      }
    }
    console.log(solution)
  }
  return solution
}
