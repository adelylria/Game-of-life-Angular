import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameOfLifeService {

  constructor() {}

  createEmptyGrid(rows: number, cols: number): boolean[][] {
    let grid: boolean[][] = [];
    for (let i = 0; i < rows; i++) {
      grid[i] = [];
      for (let j = 0; j < cols; j++) {
        grid[i][j] = false;
      }
    }
    return grid;
  }

  getNextGeneration(grid: boolean[][]): boolean[][] {
    const nextGrid = this.createEmptyGrid(grid.length, grid[0].length);

    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        const isAlive = grid[row][col];
        const neighbors = this.countAliveNeighbors(grid, row, col);

        if (isAlive && (neighbors === 2 || neighbors === 3)) {
          nextGrid[row][col] = true;
        } else if (!isAlive && neighbors === 3) {
          nextGrid[row][col] = true;
        } else {
          nextGrid[row][col] = false;
        }
      }
    }

    return nextGrid;
  }

  private countAliveNeighbors(grid: boolean[][], row: number, col: number): number {
    const directions = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1], /*[0, 0],*/ [0, 1],
      [1, -1], [1, 0], [1, 1]
    ];

    let aliveNeighbors = 0;

    for (let [dx, dy] of directions) {
      const newRow = row + dx;
      const newCol = col + dy;

      if (newRow >= 0 && newRow < grid.length && newCol >= 0 && newCol < grid[0].length) {
        if (grid[newRow][newCol]) {
          aliveNeighbors++;
        }
      }
    }

    return aliveNeighbors;
  }
}
