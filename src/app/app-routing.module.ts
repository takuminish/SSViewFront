import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SSListPageComponent } from './components/SSListPage/SSListPage/SSListPage.component';
import { SSViewPageComponent } from './components/SSViewPage/SSViewPage/SSViewPage.component';
import { TagListPageComponent } from './components/TagListPage/TagListPage/TagListPage.component';

const routes: Routes = [
  { path: '', component: SSListPageComponent },
  { path: 'ss/:id', component: SSViewPageComponent },
  { path: 'tag', component: TagListPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
