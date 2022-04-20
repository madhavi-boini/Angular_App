import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css']
})
export class LazyComponent implements OnInit {

  c:any;
  constructor(private ds:DataService) { }

  ngOnInit(): void
  {
   this.c=this.ds.getdatac();
  }

}
