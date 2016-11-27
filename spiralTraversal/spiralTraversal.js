function spiralTraversal (matrix) {
  var solution = matrix.shift()
  console.log('===============')
  console.log('matrix: ', matrix)
  matrix.forEach((array, index) => {
    solution.push(array.pop())
    if(index === matrix.length-1) {
      solution = solution.concat(matrix.pop().reverse())
    }
  })

  for(var i=matrix.length-1; i>=0; i--){
    solution.push(matrix[i].shift())
  }

  matrix.forEach((item) => {
    solution.push(item[0])
  })
  console.log('final matrix: ', matrix)
  console.log('final solution: ', solution)
  return solution
}
