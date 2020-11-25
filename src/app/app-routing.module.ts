import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch:'full' },
    { path: 'home', component: HomeComponent, data: {animation: 'home'}},
    { path: 'services', component: HomeComponent, data: {animation: 'services'}},
    { path: 'testimony', component: HomeComponent, data: {animation: 'testimony'}},
    { path: 'works', component: HomeComponent, data: {animation: 'works'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
