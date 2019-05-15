import { Component, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';
import { ColorsEnum } from '@common';

@Component({
  selector: 'simon-quarter',
  templateUrl: './simon-quarter.component.html',
  styleUrls: ['./simon-quarter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimonQuarterComponent {

  @Input() color: ColorsEnum;

  @HostBinding('class.red-quarter')
  get isRedQuarter() { return this.color === ColorsEnum.RED }

  @HostBinding('class.blue-quarter')
  get isBlueQuarter() { return this.color === ColorsEnum.BLUE }

  @HostBinding('class.orange-quarter')
  get isOrangeQuarter() { return this.color === ColorsEnum.ORANGE }

  @HostBinding('class.green-quarter')
  get isGreenQuarter() { return this.color === ColorsEnum.GREEN }

  @Input()
  lightUp: boolean = false;

  constructor() { }

}
