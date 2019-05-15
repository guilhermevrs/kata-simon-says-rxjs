import { GameEngine, ColorsEnum } from '@common';
import { Observable } from 'rxjs';

export class SimonGameEngine implements GameEngine {
  simon$: Observable<ColorsEnum[]> = new Observable<ColorsEnum[]>();
  turns$: Observable<number> = new Observable<number>();
  error$: Observable<boolean> = new Observable<boolean>();

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
