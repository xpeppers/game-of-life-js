export class Grid {
  constructor (grid) {
    this.grid = grid
  }

  getCountOfDeadCells () {
    return this.grid.flat().filter(cell => cell === false).length
  }

  print () {
    return this.grid
  }

  liveAt (row, column) {
    this.grid[row - 1][column - 1] = true
  }

  getAliveNeighborsFor (x, y) {
    const isAlive = cell => cell === true
    return [
      this.grid[x - 1]?.[y - 1],
      this.grid[x - 1]?.[y],
      this.grid[x - 1]?.[y + 1],
      this.grid[x]?.[y - 1],
      this.grid[x]?.[y + 1],
      this.grid[x + 1]?.[y - 1],
      this.grid[x + 1]?.[y],
      this.grid[x + 1]?.[y + 1]
    ].filter(isAlive).length
  }
}

export function aGrid (rows, cols) {
  const grid = []

  for (let i = 0; i < rows; i++) {
    grid[i] = []
    for (let j = 0; j < cols; j++) {
      grid[i][j] = false
    }
  }

  return new Grid(grid)
}
