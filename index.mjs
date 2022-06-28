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

  nextGeneration(){
    this.grid.forEach((row, rowIndex) => {
      row.forEach((cell, columIndex) => {

        if(this.#underpopulationAt(rowIndex,columIndex)){
          this.grid[rowIndex][columIndex] = false
        }

      });
    });
    
    return this.grid
  }

  #underpopulationAt(x,y){
    return this.grid[x,y] && this.getAliveNeighborsFor(x, y) < 2
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
