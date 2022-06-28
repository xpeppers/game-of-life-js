import { Grid, aGrid } from '../index.mjs'
import { equal, ok, deepEqual } from 'assert'
import { clearLine } from 'readline'

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

    describe('.getAliveNeighborsFor', () => {
      it('should return the count of living neighbors', () => {
        const grid = new Grid([
          [true, true, true],
          [true, true, true],
          [true, true, true]
        ])

        const count = grid.getAliveNeighborsFor(1, 1)
        equal(count, 8)
      })

      it('should return the count of living neighbors', () => {
        const grid = new Grid([
          [true, true, true],
          [false, false, false],
          [false, false, true]
        ])

        const count = grid.getAliveNeighborsFor(1, 1)
        equal(count, 4)
      })

      it('should count non existing cells as dead', () => {
        const grid = new Grid([
          [false, true],
          [true, true]
        ])

        const count = grid.getAliveNeighborsFor(0, 0)
        equal(count, 3)
      })
    })
    describe('undepopulation',()=>{

      it('a live cell with fewer than two live neighbours dies ',()=>{
        const grid = new Grid([
          [false, true],
          [false, true]  
        ])
        const nextGrid = grid.nextGeneration()
        deepEqual(nextGrid, [
          [false, false],
          [false, false]
        ])
      })
    })
  })
})
