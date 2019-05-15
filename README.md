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
