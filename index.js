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
    let count = 0
    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid[i].length; j++) {
        if (this.grid[i][j] === false) {
          count++
        }
      }
    }
    return count 
  }

  print() {
    return this.grid 
  }
}

exports.aGrid = function aGrid (rows, cols) {
  return new Grid(rows, cols)
}
