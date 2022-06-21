import { Grid, aGrid } from '../index.mjs'
import { equal, ok, deepEqual } from 'assert'

describe('game of life', () => {
  describe('grid', () => {
    it('should be available', () => {
      ok(aGrid)
    })

    it('should create a grid of 2x2', () => {
      const grid = aGrid(2, 2)
      const count = grid.getCountOfDeadCells()
      equal(count, 4)
    })

    it('should create a grid of 3x3', () => {
      const grid = aGrid(3, 3)
      const count = grid.getCountOfDeadCells()
      equal(count, 9)
    })

    it('should return 1x1 grid', () => {
      const grid = aGrid(1, 1)
      const printedGrid = grid.print()
      deepEqual(printedGrid, [[false]])
    })

    it('should return 2x2 grid', () => {
      const grid = aGrid(2, 2)
      const printedGrid = grid.print()
      const expectedGrid = [
        [false, false],
        [false, false]
      ]
      deepEqual(printedGrid, expectedGrid)
    })

    it('should create a live cell', () => {
      const grid = aGrid(1, 1)
      grid.liveAt(1, 1)
      const count = grid.getCountOfDeadCells()
      equal(count, 0)
    })

    describe('#constructor', () => {
      it('returns same generation', () => {
        const grid = new Grid([[true]])
        const nextGeneration = grid.print()
        deepEqual(nextGeneration, [[true]])
      })
    })
  })
})
