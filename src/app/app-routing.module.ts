import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent, PageNotFoundComponent, CarriersComponent, CheduleComponent, SellingComponent } from './components';
import { RoutesAppComponent } from './components/routes-app/routes-app.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'carriers',
    component: CarriersComponent
  },
  {
    path: 'chedule',
    component: CheduleComponent
  },
  {
    path: 'routes-app',
    component: RoutesAppComponent
  },
  {
    path: 'selling',
    component: SellingComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    CarriersComponent,
    CheduleComponent,
    RoutesAppComponent,
    SellingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppRoutingModule { }
