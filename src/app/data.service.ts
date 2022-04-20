import { Injectable,OnInit } from '@angular/core';
import{FormsModule, NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit{

  js:any=["Functions","Objects","Rest parameters","Closure"];
  ts:any=["Classes","Objects","Datatypes","Interfaces"];
  bs:any=["Functions","Objects","Classes","Datatypes"];
  c:any=[7373883789,"xyz@gmail.com"];

  constructor(private hc:HttpClient) { }
  ngOnInit()
  {

  }
  getdata():Observable<any>
  {
      return this.hc.get("https://jsonplaceholder.typicode.com/comments");
  }
  getdatats():Observable<any>
  {
    return this.hc.get("https://reqres.in/api/users?page=2");
  }
   getdatabs(){
     return this.bs;
   }
  getdatac(){
     return this.c;
   }
}
  // getdatajs(){
  //   return this.js
  // }
  // getdatats(){
  //   return this.ts;
  // }
