import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import{HomeRoutingModule}from './home-routing.module';
import{MatSliderModule}from '@angular/material/slider';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSliderModule
  ]
})
export class HomeModule { }
