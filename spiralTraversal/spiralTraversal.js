function spiralTraversal (main) {
  var solution = []
  var matrixLength = [].concat.apply([], main).length;
  function recurse(matrix) {
    if(solution.length === matrixLength) return solution
    solution = solution.concat(matrix.shift())
    for(var i=0; i<matrix.length; i++) {
      solution.push(matrix[i].pop())
      matrix[i] = matrix[i].reverse()
    }
    matrix = matrix.reverse()
    return recurse(matrix)
  }

  return recurse(main)
}
