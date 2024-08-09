import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameOfLiveComponent } from './game-of-life.component';

describe('GameOfLifeComponent', () => {
  let component: GameOfLifeComponent;
  let fixture: ComponentFixture<GameOfLifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameOfLiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameOfLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
