import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddListComponent } from './language/add-list/add-list.component';


const routes: Routes = [
  {path: '',component: AddListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
