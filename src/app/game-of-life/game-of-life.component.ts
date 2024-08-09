import { Component, OnInit } from '@angular/core';
import { GameOfLifeService } from './game-of-life.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-of-life',
  templateUrl: './game-of-life.component.html',
  styleUrls: ['./game-of-life.component.css'],
  standalone: true,
  imports:  [CommonModule]
})

export class GameOfLifeComponent implements OnInit {
  grid: boolean[][] = [];
  rows: number = 20;
  cols: number = 20;
  intervalId: any;
  isRunning: boolean = false;

  constructor(private gameOfLifeService: GameOfLifeService) {}

  ngOnInit() {
    this.grid = this.gameOfLifeService.createEmptyGrid(this.rows, this.cols);
  }

  toggleCell(row: number, col: number) {
    this.grid[row][col] = !this.grid[row][col];
  }

  startGame() {
    this.isRunning = true;
    this.intervalId = setInterval(() => {
      this.grid = this.gameOfLifeService.getNextGeneration(this.grid);
    }, 500);
  }

  stopGame() {
    this.isRunning = false;
    clearInterval(this.intervalId);
  }

  resetGame() {
    this.stopGame();
    this.grid = this.gameOfLifeService.createEmptyGrid(this.rows, this.cols);
  }
}
