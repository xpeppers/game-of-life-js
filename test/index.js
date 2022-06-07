const { equal } = require('assert')

describe('game of life', () => {
  const gameOfLife = require('..')

  describe('grid', () => {
    it('needs to be available', () => {
      const grid = gameOfLife.aGrid(2, 2)
      const count = grid.getCountOfDeadCells()
      equal(count, 4)
    })
  })
})
