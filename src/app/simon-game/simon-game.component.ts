import { Component, OnInit, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';
import { ColorsEnum } from '@common';
import { SimonGameEngine } from '@business';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'simon-game',
  templateUrl: './simon-game.component.html',
  styleUrls: ['./simon-game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimonGameComponent implements OnInit {

  inProgress: boolean = false;

  lightRedUp$: Observable<boolean>;
  lightBlueUp$: Observable<boolean>;
  lightOrangeUp$: Observable<boolean>;
  lightGreenUp$: Observable<boolean>;

  @Input()
  height: number = 200;

  @HostBinding('style.height')
  get cmpHeight() { return `${this.height}px` }

  @HostBinding('style.width')
  get cmpWidth() { return `${this.height}px` }

  constructor(public engine: SimonGameEngine) {
    this.lightRedUp$ = this.engine.simon$.pipe(
      map((colors) => colors.some((color) => color === ColorsEnum.RED)),
      startWith(false)
    );
    this.lightBlueUp$ = this.engine.simon$.pipe(
      map((colors) => colors.some((color) => color === ColorsEnum.BLUE)),
      startWith(false)
    );
    this.lightOrangeUp$ = this.engine.simon$.pipe(
      map((colors) => colors.some((color) => color === ColorsEnum.ORANGE)),
      startWith(false)
    );
    this.lightGreenUp$ = this.engine.simon$.pipe(
      map((colors) => colors.some((color) => color === ColorsEnum.GREEN)),
      startWith(false)
    );
  }

  ngOnInit() {
  }

  centerClicked() {
    if (!this.inProgress) {
      this.engine.startGame();
    } else {
      this.engine.endGame();
    }
    this.inProgress = !this.inProgress;
  }

  quarterClicked(color: ColorsEnum) {
    if (this.inProgress) {
      this.engine.next(color);
    }
  }

}
