import { Component, OnInit } from '@angular/core';
import { WeatherserveService } from '../weatherserve.service';
import { CurrentWeather } from '../current-weather';
import { subscribeOn } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { NgForm, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 city:string
   url:any;
   response:any;
   fullUrl:any;
   id='e69753e746b4ac57b686210cd065508b';
   ti:any;

   
 myweather:CurrentWeather;
  constructor(private ws:WeatherserveService, private http:HttpClient) { 
    
  }

  ngOnInit() {
  
    
  //  this.ws.str='london';
   
    //  this.ws.getWeather(this.city);
    // this.ws.getWeather(this.ci).subscribe((response) => {
    //   console.log(response);
    // });
  

}
getweather(weath: NgForm):void{
 
}

submit(){
  this.url='http://api.openweathermap.org/data/2.5/forecast?q=';
   this.fullUrl=this.url+this.city+'&APPID='+this.id;
    this.response=this.http.get(this.fullUrl);
    this.response.subscribe((response)=>this.ti=response);
    
}
// http://api.openweathermap.org/data/2.5/forecast?q=
// this.url,{email:"clitan.c@pacewisdom.com",password:'clitan28'}
}
// this.ti=response)