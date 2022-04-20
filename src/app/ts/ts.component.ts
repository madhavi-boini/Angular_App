import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-ts',
  templateUrl: './ts.component.html',
  styleUrls: ['./ts.component.css']
})
export class TsComponent implements OnInit {
    data1=[];
    constructor(private ds:DataService) {
     }
      ngOnInit(): void
    {
     this.ds.getdatats().subscribe(
       res=>{this.data1=res.data;
             console.log(this.data1)},
       err=>{
         alert("something went wrong");
         console.log(err);
       }
     );
    }

}