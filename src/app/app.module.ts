import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SpecBoardComponent } from './spec-board/spec-board.component';
import { SpecBeansComponent } from './spec-beans/spec-beans.component';
import { ParticlesModule } from 'angular-particle';
import { EditBoardComponent } from './edit-board/edit-board.component';


@NgModule({
  declarations: [
    AppComponent,
    SpecBoardComponent,
    SpecBeansComponent,
    EditBoardComponent
  ],
  imports: [
    BrowserModule,
    ParticlesModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
