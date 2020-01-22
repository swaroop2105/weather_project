import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class WeatherserveService {

  apikey='e69753e746b4ac57b686210cd065508b';
  url='http://api.openweathermap.org/data/2.5/forecast?q=';
  str:any;
  

constructor (private http:HttpClient){
  
    //  this.url='http://api.openweathermap.org/data/2.5/forecast?q='
  // this.url='http://api.openweathermap.org/data/2.5/forecast?q=paris&APPID=e69753e746b4ac57b686210cd065508b'

}
 getWeather(city){
  this.str=this.url+this.str+'&APPID='+this.apikey;
   return this.http.get(this.str);
  // +city+','+code+'&APPID='+this.apikey
 }
 }