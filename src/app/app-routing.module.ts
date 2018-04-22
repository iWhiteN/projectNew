import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { HomeComponent, PageNotFoundComponent } from './components';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

export const appRouterComponents = [HomeComponent, PageNotFoundComponent];


@NgModule({
  declarations: [],
  imports: [],
  providers: []
})
export class AppRoutingModule { }
