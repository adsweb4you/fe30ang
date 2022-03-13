import { Component, OnInit   , AfterContentInit ,   Output, EventEmitter ,  Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit ,  AfterContentInit{
  
  shownav = true;

  constructor(
    private activeroutes:ActivatedRoute,

  ) {

 

   }
  
  @Input() color = "red"
  @Output() testdata  = new EventEmitter<any>();


  ngOnInit(): void {

    let pg = this.activeroutes.snapshot.routeConfig?.path;
    if (pg == 'product') {
      this.shownav = false;
    }
    console.log(pg)
  }

  ngAfterContentInit(){
    console.log("asd")
  }


  changeval(valu:any){
    this.testdata.emit(valu)
   }

}
