import { Grid } from '../index.mjs'
import { deepEqual, equal } from 'assert'

describe('Game of Life', () => {

  describe('Grid', () => {

    describe('#constructor', () => {
      it('returns same generation', () => {
        const grid = new Grid([[true]])
        deepEqual(grid.get(), [[true]])
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
  })

  describe('Underpopulation', () => {

    it('when there is nothing alive, nothing happen', () => {
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

    it('a single cell dies with no neighbours', () => {
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

    it('a live cell with fewer than two live neighbours dies ', () => {
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

  describe('Overpopulation',() => {

    it('a live cell with more then three live neighbours dies', () => {
      const grid = new Grid([
        [true, true],
        [true, true],
        [true, false]
      ])

      grid.evolve()

      deepEqual(grid.get(), [
        [true, true],
        [false, false],
        [true, false]
      ])
    })
  })

})
