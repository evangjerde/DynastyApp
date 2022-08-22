import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticlesComponent } from './articles/articles.component';
import { Rankings2022PsComponent } from './articles/rankings2022-ps/rankings2022-ps.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NflPageComponent } from './nfl-page/nfl-page.component';
import { OwnersComponent } from './owners/owners.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'owners', component: OwnersComponent },
  { path: 'nfl', component: NflPageComponent },
  {
    path: 'articles',
    component: ArticlesComponent
  },
  { path: 'articles/2022psRankings', component: Rankings2022PsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
