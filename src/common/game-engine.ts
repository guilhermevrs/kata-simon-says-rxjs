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

  /** Stream that indicates if the engine is running or not */
  running$: Observable<boolean>;

  /** Stream that indicates if an error has been commited */
  error$: Observable<boolean>;

  /** ON/OFF toggles the engine */
  toggle();

  /** Next color from user */
  next(color: ColorsEnum);
}
