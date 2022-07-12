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

    let newGrid = Array(this.grid.length).fill(false).map(()=>Array(this.grid[0].length).fill(false))

    this.grid.forEach((row, rowIndex) => {
      row.forEach((cell, columIndex) => {

        if (this.#shouldDie(rowIndex, columIndex)) {
          newGrid[rowIndex][columIndex] = false
        } else {
          newGrid[rowIndex][columIndex] = this.grid[rowIndex][columIndex]
        }

      })
    })

    this.grid = newGrid
  }

  #shouldDie(rowIndex, columIndex) {
    return this.#underpopulationAt(rowIndex, columIndex) || this.#overpopulation(rowIndex, columIndex);
  }

  #overpopulation(x, y) {
    return this.grid[x, y] && this.getAliveNeighborsFor(x, y) > 3;
  }

  #underpopulationAt (x, y) {
    return this.grid[x, y] && this.getAliveNeighborsFor(x, y) < 2
  }

}
