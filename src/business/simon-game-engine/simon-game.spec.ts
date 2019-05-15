import { TestScheduler } from 'rxjs/testing';
import { SimonGameEngine } from './simon-game.engine';

const scheduler = new TestScheduler((actual, expected) => {
  expect(actual).toEqual(expected)
})

describe('SimonGameEngine', () => {
  describe('on environment setup', () => {
    it('should compile', () => {
      expect(true).toBe(true);
    });

    it('should work with TestScheduler', () => {
      const engine = new SimonGameEngine();
      scheduler.run(helpers => {
        const { expectObservable } = helpers;
        expectObservable(engine.turns$).toBe('300ms a 299ms b 299ms c 299ms (d|)', {
          a: 0,
          b: 1,
          c: 2,
          d: 3
        })
      })
    });
  });
})
