class Grid {
  constructor (rows, cols) {
    this.grid = rows * cols
  }

  getCountOfDeadCells () {
    return this.grid
  }
}

exports.aGrid = function aGrid (rows, cols) {
  return new Grid(rows, cols)
}
