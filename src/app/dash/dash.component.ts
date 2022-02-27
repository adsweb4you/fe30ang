import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {

  loaded = true;

  mytest = '';

  homecolor = "green"

  constructor() { }

  ngOnInit(): void {
 setTimeout(() => {
    this.loaded  = false
 }, 2000);
    

 
  }

 

  addItem(newItem: any) {
    this.mytest = newItem;
  }

}
