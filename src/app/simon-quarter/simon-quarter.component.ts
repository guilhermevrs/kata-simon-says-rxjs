import { Component, ChangeDetectionStrategy, Input, HostBinding, HostListener } from '@angular/core';
import { ColorsEnum } from '@common';
import { Observable, Subject, timer, animationFrameScheduler } from 'rxjs';
import { switchMap, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'simon-quarter',
  templateUrl: './simon-quarter.component.html',
  styleUrls: ['./simon-quarter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimonQuarterComponent {

  internalLight$: Observable<boolean>;

  private internalTrigger: Subject<boolean> = new Subject<boolean>()

  @Input() color: ColorsEnum;

  @HostBinding('class.red-quarter')
  get isRedQuarter() { return this.color === ColorsEnum.RED }

  @HostBinding('class.blue-quarter')
  get isBlueQuarter() { return this.color === ColorsEnum.BLUE }

  @HostBinding('class.orange-quarter')
  get isOrangeQuarter() { return this.color === ColorsEnum.ORANGE }

  @HostBinding('class.green-quarter')
  get isGreenQuarter() { return this.color === ColorsEnum.GREEN }

  @HostListener('click')
  hostClick() {
    this.internalTrigger.next();
  }

  @Input()
  lightUp: boolean = false;

  constructor() {
    this.internalLight$ = this.internalTrigger.pipe(
      switchMap(() =>
        timer(150, animationFrameScheduler).pipe(
          map(() => false),
          startWith(true)
        )
      )
    )
  }

}
