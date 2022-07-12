export class Grid {
    constructor(grid) {
        this.grid = grid
    }

    get() {
        return this.grid.map(row => [...row])
    }

    getAliveNeighborsFor(x, y) {
        const isAlive = cell => cell === true
        return [
            this.grid[x - 1]?.[y - 1],
            this.grid[x - 1]?.[y],
            this.grid[x - 1]?.[y + 1],
            this.grid[x]?.[y - 1],
            this.grid[x]?.[y + 1],
            this.grid[x + 1]?.[y - 1],
            this.grid[x + 1]?.[y],
            this.grid[x + 1]?.[y + 1],
        ].filter(isAlive).length
    }

    evolve() {
        let newGrid = this.get()

        this.grid.forEach((row, rowIndex) => {
            row.forEach((cell, columIndex) => {
                if (this.#shouldDie(rowIndex, columIndex)) {
                    newGrid[rowIndex][columIndex] = false
                }

                if (this.getAliveNeighborsFor(rowIndex, columIndex) === 3) {
                    newGrid[rowIndex][columIndex] = true
                }
            })
        })

        this.grid = newGrid
    }

    #shouldDie(rowIndex, columIndex) {
        return (
            this.#underpopulationAt(rowIndex, columIndex) ||
            this.#overpopulation(rowIndex, columIndex)
        )
    }

    #overpopulation(x, y) {
        return this.grid[(x, y)] && this.getAliveNeighborsFor(x, y) > 3
    }

    #underpopulationAt(x, y) {
        return this.grid[(x, y)] && this.getAliveNeighborsFor(x, y) < 2
    }
}
