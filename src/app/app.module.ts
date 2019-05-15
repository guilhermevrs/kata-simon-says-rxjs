import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimonGameComponent } from './simon-game/simon-game.component';
import { SimonQuarterComponent } from './simon-quarter/simon-quarter.component';
import { SimonCenterComponent } from './simon-center/simon-center.component';
import { SimonGameEngine } from '@business';

@NgModule({
  declarations: [
    AppComponent,
    SimonGameComponent,
    SimonQuarterComponent,
    SimonCenterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    SimonGameEngine
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
