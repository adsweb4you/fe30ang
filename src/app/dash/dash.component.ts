import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {

  loaded = true;

  mytest = 'https://images2.boardingschoolreview.com/photo/1122x864/1000/593/img-academy-oqxuxY.jpg';

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
