import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-bs',
  templateUrl: './bs.component.html',
  styleUrls: ['./bs.component.css']
})
export class BsComponent implements OnInit {

  bs:any;
  constructor(private ds:DataService) { }

  ngOnInit(): void
  {
    this.bs=this.ds.getdatabs();
  }

}
