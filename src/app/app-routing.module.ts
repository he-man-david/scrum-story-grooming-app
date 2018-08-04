import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpecBoardComponent } from './spec-board/spec-board.component';
import { EditBoardComponent } from './edit-board/edit-board.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  { 
    path: 'home', component: SpecBoardComponent
  },
  {
    path: 'edit', component: EditBoardComponent
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
