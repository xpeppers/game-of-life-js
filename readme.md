Game of Life
---
This Kata is about calculating the next generation of Conway’s Game of Life, given any starting state.

You start with a two dimensional grid of cells, where each cell is either alive or dead. In this version of the problem, the grid is finite, and no life can exist off the edges. When calculating the next generation of the grid, follow these rules:

1. Any live cell with fewer than two live neighbours dies (referred to as underpopulation or exposure).
1. Any live cell with more than three live neighbours dies (referred to as overpopulation or overcrowding).
1. Any live cell with two or three live neighbours lives, unchanged, to the next generation.
1. Any dead cell with exactly three live neighbours will come to life.
The code should allow for the board/world to be created with a valid initial state, or a randomly generated state.

![rules](https://kata-log.rocks/images/game_of_life_text.jpg) ![tick](https://kata-log.rocks/images/game_of_life_graphic.jpg)


- tutte le celle al di fuori dalla griglia le possiamo considerare morte
- la dimensione della griglia non cambia durante le generazioni
