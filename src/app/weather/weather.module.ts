import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastComponent } from './forecast/forecast.component';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';




const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'forecast',
    component:ForecastComponent
  }
];
@NgModule({
  declarations: [ForecastComponent, HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WeatherModule { }
