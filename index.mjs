export class Grid {
  constructor (grid) {
    this.grid = grid
  }

  get () {
    return this.grid
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

  evolve () {
    this.grid.forEach((row, rowIndex) => {
      row.forEach((cell, columIndex) => {

        if (this.#underpopulationAt(rowIndex, columIndex)) {
          this.grid[rowIndex][columIndex] = false
        }

      })
    })
  }

  #underpopulationAt (x, y) {
    return this.grid[x, y] && this.getAliveNeighborsFor(x, y) < 2
  }

}
