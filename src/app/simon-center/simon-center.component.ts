import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'simon-center',
  templateUrl: './simon-center.component.html',
  styleUrls: ['./simon-center.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimonCenterComponent implements OnInit {

  @Input() isInProgress: boolean;

  @Input() turns: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
