import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SSListPageComponent } from './components/SSListPage/SSListPage/SSListPage.component';


const routes: Routes = [
  {path: '', component: SSListPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
