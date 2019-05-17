import { GameEngine, ColorsEnum } from '@common';
import { Observable } from 'rxjs';

export class SimonGameEngine implements GameEngine {
  simon$: Observable<ColorsEnum[]> = new Observable<ColorsEnum[]>();
  turns$: Observable<number> = new Observable<number>();
  running$: Observable<boolean> = new Observable<boolean>();
  error$: Observable<boolean> = new Observable<boolean>();

  toggle() {
    console.error("Method not implemented.");
  }

  next(_color: ColorsEnum) {
    console.error("Method not implemented.");
  }
}
