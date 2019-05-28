# Kata Simon Says Rxjs

## Description

This kata consists of implementing a Simon says game engine on RxJS. The engine (defined at [simon-game.engine.ts](./src/business/simon-game.engine.ts)) has all the methods and properties defined by an interface (defined at [game-engine.ts](./src/common/game-engine.ts))
and it's already connected to an angular app of a simon says game (defined at [app folder](./src/app)). Only the engine implementation itself is missing.

As every kata, the engine must be developed by following the test driven development methodology. The tests of the engine must be defined at [simon-game.spec.ts](./src/business/simon-game.spec.ts). The testing framework used is jasmine and it's already in place (check the tests under **on environment setup** describe). For testing the observable behaviors, specially for timing intervals and emitions, the developers are advised to use the **RxJS marble testing** ([more information in here](https://rxjs-dev.firebaseapp.com/guide/testing/marble-testing))

## Commands

### Start the application

To run the application, run:
```
yarn start
```
The app will be accesible at [http://localhost:4200](http://localhost:4200)

### Test engine

To run tests of the engine, run:
```
yarn kata:test
```

## Constraints
  
  1. The streams ``running$``, ``turns$`` and ``error$`` should emit its latest value for any subscription.

  2. Any stream accessible from outside of the engine must be an ``Observable`` (not a ``Subject``).

  3. The engine is either on RUNNING or NOT RUNNING state

  4. When the engine is created, it's on NOT RUNNING state

  5. The engine should avoid as much as possible to have variables (public or not) not defined by the ``GameEngine`` interface

  6. Intervals should use the ``animationFrame`` scheduler

## Objectives
  
  1. When on NOT RUNNING state, the ``running$`` stream must emit ``false``

  2. When on NOT RUNNING state, the ``error$`` stream must emit ``false``

  3. If on NOT RUNNING state, the method ``toggle()`` pass the engine to RUNNING state. Otherwise, it passes to NOT RUNNING state

  4. When on RUNNING state, the ``running$`` stream must emit ``true``

  5. When passing from NOT RUNNING to RUNNING, the ``turns$`` stream must emit ``1``

  6. When RUNNING, the ``simon$`` stream should generate ``N`` emitions of random colors (``ColorsEnum``), where ``N`` is the last number emitted by ``turns$``.

  7. When ``simon$`` is about to emit ``N`` colors, it should emit all the ``N - 1`` colors it has emitted plus a new random one, as shown in the example below.

  ```typescript
  // 1
  turns$: '1'
  simon$: 'RED'
  // 2
  turns$: '2'
  simon$: 'RED-GREEN'
  // 3
  turns$: '3'
  simon$: 'RED-GREEN-BLUE'
  // ...
  // N - 1
  turns$: 'N-1'
  simon$: 'RED-GREEN-BLUE-(...)-ORANGE'
  // N
  turns$: 'N'
  simon$: 'RED-GREEN-BLUE-(...)-ORANGE-RED'
  ```

  8. Every emition of ``simon$`` must be timed by ``400ms``

  9. When RUNNING and ``simon$`` has finished emitting its N colors, if ``next`` method is called N times in the same order as ``simon$`` sequence, ``turns$`` should emit the next integer, as shown in the example

  ```typescript
  turns$: N
  simon$: 'RED-GREEN-ORANGE-(...)-GREEN-BLUE'
  next('RED');
  next('GREEN');
  next('ORANGE');
  // (...)
  next('GREEN');
  next('BLUE');
  turns$: N+1
  ```

  10. When RUNNING and ``simon$`` has finished emitting its N colors, if ``next`` method is called with the wrong color, ``error$`` should emit ``true`` and ``400ms`` after, emit ``false``.

## Bonus

  11. When RUNNING and ``simon$`` has finished emitting its N colors, if ``next`` method is called with the wrong color, 400ms after emiting the color passed to ``next``, ``simon$`` should re-emit its sequence.

  12. Configure the engine with the max number of turns. When ``turns$`` emits this value, ``simon$`` should emit ``RED-GREEN-ORANGE-BLUE`` 3 times with an interval of ``400ms`` between each color. After that, engine goes into NOT RUNNING state.

  13. Makes ``simon$`` to repeat the sequence if the ``next`` method is not called yet after 3 seconds of the end of the sequence

  14. The ``next`` method should make ``simon$`` emit the same color passed by argument (no matter the engine state).
