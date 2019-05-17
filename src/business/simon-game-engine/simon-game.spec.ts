import { TestScheduler } from 'rxjs/testing';
import { SimonGameEngine } from './simon-game.engine';
import { of, interval, from } from 'rxjs';
import { take, skip } from 'rxjs/operators';

const scheduler = new TestScheduler((actual, expected) => {
  expect(actual).toEqual(expected)
})

describe('SimonGameEngine', () => {
  describe('on environment setup', () => {
    it('should compile', () => {
      expect(true).toBe(true);
    });

    it('should be able to test normal streams', () => {
      scheduler.run(helpers => {
        const { expectObservable } = helpers;
        expectObservable(of([0,1,2,3])).toBe('(a|)', {a: [0,1,2,3]})
      });
    });

    it('should be able to test successive emitions', () => {
      scheduler.run(helpers => {
        const { expectObservable } = helpers;
        expectObservable(from([0,1,2,3])).toBe('(abcd|)', {
          a: 0,
          b: 1,
          c: 2,
          d: 3
        })
      });
    });

    it('should be able to test timed streams', () => {
      scheduler.run(helpers => {
        const { expectObservable } = helpers;
        expectObservable(interval(200).pipe(take(2))).toBe('200ms a 199ms (b|)', {a: 0, b: 1});
      });
    });
  });
})
