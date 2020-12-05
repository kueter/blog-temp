import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { WorksComponent } from './works/works.component';


const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch:'full' },
    { path: 'home', component: HomeComponent, data: {animation: 'home'}},
    { path: 'services', component: PricingComponent, data: {animation: 'services'}},
    { path: 'blog', component: TestimonyComponent, data: {animation: 'testimony'}},
    { path: 'works', component: WorksComponent, data: {animation: 'works'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
