const { equal, ok, deepEqual } = require('assert')

describe('game of life', () => {
  const gameOfLife = require('..')

  describe('grid', () => {
    it('should be available', () => {
      ok(gameOfLife.aGrid)
    })

    it('should create a grid of 2x2', () => {
      const grid = gameOfLife.aGrid(2, 2)
      const count = grid.getCountOfDeadCells()
      equal(count, 4)
    })

    it('should create a grid of 3x3', () => {
      const grid = gameOfLife.aGrid(3, 3)
      const count = grid.getCountOfDeadCells()
      equal(count, 9)
    })

    it("should return 1x1 grid", () => {
      const grid = gameOfLife.aGrid(1, 1)
      const printedGrid = grid.print()
      deepEqual(printedGrid, [[false]])
    })

    it("should return 2x2 grid", () => {
      const grid = gameOfLife.aGrid(2, 2)
      const printedGrid = grid.print()
      const expectedGrid = [
        [false, false],
        [false, false],
      ]
      deepEqual(printedGrid,expectedGrid )
    })

    it('should create a live cell', ()=> {
      const grid = gameOfLife.aGrid(1,1)
      grid.liveAt(1,1)
      const count = grid.getCountOfDeadCells()
      equal(count,0)
    })

  })
})
