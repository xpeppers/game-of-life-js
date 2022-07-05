import { Grid } from '../index.mjs'
import { equal, deepEqual } from 'assert'

describe('Game of Life', () => {

  describe('Grid', () => {

    it('should initialize an empty grid and print it correctly', () => {
      const grid = aGrid(2, 2)
      const printedGrid = grid.get()
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
        const nextGeneration = grid.get()
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

      it('when there is nothin alive, nothing happen',()=>{
        const grid = new Grid([
          [false, false],
          [false, false]  
        ])

        grid.evolve()

        deepEqual(grid.get(), [
          [false, false],
          [false, false]
        ])
      })

      it('a single cell dies with no neighbours',()=>{
        const grid = new Grid([
          [true, false],
          [false, false]  
        ])

        grid.evolve()

        deepEqual(grid.get(), [
          [false, false],
          [false, false]
        ])
      })

      it('a live cell with fewer than two live neighbours dies ',()=>{
        const grid = new Grid([
          [false, true],
          [false, true]  
        ])

        grid.evolve()

        deepEqual(grid.get(), [
          [false, false],
          [false, false]
        ])
      })
    })
  })
})

function aGrid (rows, cols) {
  const grid = []

  for (let i = 0; i < rows; i++) {
    grid[i] = []
    for (let j = 0; j < cols; j++) {
      grid[i][j] = false
    }
  }

  return new Grid(grid)
}
