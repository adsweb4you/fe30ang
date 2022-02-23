import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  show = true;

  appname = {
    title:"ცვლადი",
    age:25
  }

  iimgwid:any = 50;

  appimg = "/assets/img/imgs.png"


  incrsize(){
   this.iimgwid += 50;
  }

  toggle(){
    this.show = !this.show;
  }

}
