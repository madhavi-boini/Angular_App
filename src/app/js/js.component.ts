import { Component, OnInit, ɵbypassSanitizationTrustResourceUrl } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-js',
  templateUrl: './js.component.html',
  styleUrls: ['./js.component.css']
})
 export class JsComponent  implements OnInit {
 searchTerm2='';
 data=[];
 constructor(private ds:DataService) {
  }
   ngOnInit(): void
 {
  this.ds.getdata().subscribe(
    res=>{this.data=res;
          console.log(this.data)},
    err=>{
      alert("something went wrong");
      console.log(err);
    }
  );
}
  
}
