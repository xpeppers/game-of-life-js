class Grid {

  constructor (grid) {
     
    this.grid = grid

  }

  getCountOfDeadCells () {
    return this.grid.flat().filter(cell => cell === false).length
  }

  print() {
    return this.grid 
  }

  liveAt(row, column){
    this.grid[row-1][column-1] = true
  }
}

exports.aGrid = function aGrid (rows, cols) {
  const grid = [] 


  for (let i = 0; i < rows; i++) {
    grid[i] = []
    for (let j = 0; j < cols; j++) {
      grid[i][j] = false 
    }
  }

  return new Grid(grid)
}
