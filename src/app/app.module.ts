import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpecBoardComponent } from './spec-board/spec-board.component';
import { SpecBeansComponent } from './spec-beans/spec-beans.component';
import { ParticlesModule } from 'angular-particle';


@NgModule({
  declarations: [
    AppComponent,
    SpecBoardComponent,
    SpecBeansComponent
  ],
  imports: [
    BrowserModule,
    ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
