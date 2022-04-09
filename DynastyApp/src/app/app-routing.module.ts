import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NflPageComponent } from './nfl-page/nfl-page.component';
import { OwnersComponent } from './owners/owners.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'owners', component: OwnersComponent },
  { path: 'nfl', component: NflPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
