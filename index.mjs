export class Grid {
  constructor (grid) {
    this.grid = grid
  }

  getCountOfDeadCells () {
    return this.grid.flat().filter(cell => cell === false).length
  }

  get () {
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

  evolve() {
    this.grid.forEach((row, rowIndex) => {
      row.forEach((cell, columIndex) => {

        if(this.#underpopulationAt(rowIndex,columIndex)){
          this.grid[rowIndex][columIndex] = false
        }

      });
    });
  }

  #underpopulationAt(x,y){
    return this.grid[x,y] && this.getAliveNeighborsFor(x, y) < 2
  }

}
