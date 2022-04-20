import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-secondyear',
  templateUrl: './secondyear.component.html',
  styleUrls: ['./secondyear.component.css']
})
export class SecondyearComponent implements OnInit{
  searchTerm3='';
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
  // data:any=[
  //   {r:1,f:"Samantha",src:"https://i.pinimg.com/236x/9d/f0/e4/9df0e44a062543c40afab3d7352d4106.jpg"},
  //   {r:2,f:"Vijay",src:"https://media3.picsearch.com/is?GxSOWLyBDxe5shQhZgZiKYc9tHJH7SvRWQVoi5xGPtM&height=194"},    
  //   {r:3,f:"Akhil",src:"https://media1.picsearch.com/is?Yg4kGIvMJYPSU6Jt6X_xVZ_TyfR_41ZKk1mEj3ncNGg&height=263"},
  //   {r:4,f:"Varun Tej",src:"https://media3.picsearch.com/is?8uZ_qMrddn0MlNr8qH3qpUYh8DIcg8pfhZrqPDOm78c&height=215"},
  //   {r:5,f:"Hansika",src:"https://media5.picsearch.com/is?VFG2VvDG92mfdlEbR6PguGZYmzKcC4UOTHHPHt5eV2w&height=341"},
  //   {r:6,f:"Ram Charan",src:"https://media1.picsearch.com/is?xAJwG6Yd2hF3GgnA6Mpv9ecaW-5vjRFcM8pJI20SJk8&height=240"},
  //   {r:7,f:"Thamannah",src:"https://media2.picsearch.com/is?rvmykq8r55_Wiilq6XlRXYK59CLifHW8ZTBn3AmlCwk&height=189"},
  //   {r:8,f:"Prabhas",src:"https://media4.picsearch.com/is?DWZjZOO1Sfju_0rQ_c-MY5mFZ-FBP3bSrqXJQPJsloQ&height=212"},
  //   {r:9,f:"Allu Arjun",src:"https://media4.picsearch.com/is?UehM0tCU7EfoFyba60Vq9rkYd1pGunzXztSVA1aTNdU&height=255"},
  //   {r:10,f:"Nani",src:"https://media3.picsearch.com/is?Oq5kKAm_nr-gKGm1QSw_0nNdCTWZl1e-zhYOQ2AJwYU&height=264"}]
 