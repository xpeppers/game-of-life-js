class Grid {
  constructor (rows, cols) {
     
    this.grid = [] 

    for (let i = 0; i < rows; i++) {
      this.grid[i] = []
      for (let j = 0; j < cols; j++) {
        this.grid[i][j] = false 
      }
    }

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
  return new Grid(rows, cols)
}
