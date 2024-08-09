import { Component } from '@angular/core';
import { GameOfLifeComponent } from './game-of-life/game-of-life.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GameOfLifeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Game-of-life-Angular';
}
