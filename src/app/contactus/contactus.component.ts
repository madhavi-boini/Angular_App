import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  c:any;
  constructor(private ds:DataService) { }

  ngOnInit(): void
  {
   this.c=this.ds.getdatac();
  }
}
