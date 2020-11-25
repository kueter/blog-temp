import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollpyDirective } from './scrollpy.directive';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { WorksComponent } from './works/works.component';
import { TestimonyComponent } from './testimony/testimony.component';


@NgModule({
  declarations: [
    AppComponent,
    ScrollpyDirective,
    HomeComponent,
    PricingComponent,
    WorksComponent,
    TestimonyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
