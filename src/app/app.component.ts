import { Component } from '@angular/core';
import { SimonGameEngine } from '@business';

@Component({
  selector: 'kata-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public engine: SimonGameEngine) {}
}
