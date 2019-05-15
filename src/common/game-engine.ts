import { ColorsEnum } from './colors-enum';
import { Observable } from 'rxjs';

/**
 * Defines an engine
 */
export interface GameEngine {
  /** Stream that emits what simon says */
  simon$: Observable<ColorsEnum[]>

  /** Stream that indicates how many turns you have done */
  turns$: Observable<number>;

  /** Stream that indicates if an error has been commited */
  error$: Observable<boolean>;

  /** Starts the game */
  startGame();

  /** Ends the game */
  endGame();

  /** Next color for simon */
  next(color: ColorsEnum);
}
