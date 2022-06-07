const { equal, ok } = require('assert')

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
  })
})
