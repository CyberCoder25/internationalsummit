import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent, NotfoundComponent } from './view/idex';
import { FooterComponent } from './shared';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: '404',
    component: NotfoundComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
