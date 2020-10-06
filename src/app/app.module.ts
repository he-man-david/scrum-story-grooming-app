import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SpecBoardComponent } from './spec-board/spec-board.component';
import { SpecBeansComponent } from './spec-beans/spec-beans.component';
import { EditBoardComponent } from './edit-board/edit-board.component';
import { EditConfirmModalComponent } from './edit-board/edit-confirm-modal/edit-confirm-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    SpecBoardComponent,
    SpecBeansComponent,
    EditBoardComponent,
    EditConfirmModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EditConfirmModalComponent]
})
export class AppModule { }
