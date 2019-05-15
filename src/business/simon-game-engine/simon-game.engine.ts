import { GameEngine, ColorsEnum } from '@common';
import { Observable, of, zip, interval, animationFrameScheduler } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export class SimonGameEngine implements GameEngine {
  simon$: Observable<ColorsEnum[]> = new Observable<ColorsEnum[]>();
  turns$: Observable<number> = new Observable<number>();
  error$: Observable<boolean> = new Observable<boolean>();

  constructor() {
    // For test purposes
    this.turns$ = zip(
      interval(300, animationFrameScheduler),
      of(0,1,2,3)
    ).pipe(
      map(([interval, n]) => n)
    );
  }

  startGame() {
    console.error("Method not implemented.");
  }

  endGame() {
    console.error("Method not implemented.");
  }

  next(color: ColorsEnum) {
    console.error("Method not implemented.");
  }
}
