import { Component, OnInit } from '@angular/core';
import {NgForm, NgModel} from "@angular/forms"
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  data:any;
  constructor() { }
  ngOnInit(): void {
  }
//   register(regForm:NgForm){
//     if(regForm.valid)
//     {
//        this.data=regForm.value;  
//     }
// }
}