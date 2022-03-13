import { Component, OnInit   , AfterContentInit ,   Output, EventEmitter ,  Input} from '@angular/core';
import { ActivatedRoute, Router , NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit ,  AfterContentInit{
  
  shownav = true;

  constructor(
    private activeroutes:ActivatedRoute,
    private router:Router
  ) {

    router.events.subscribe((ev)=>{
       if (ev instanceof NavigationEnd ) {
          let page = window.location.href.split('/')[3];
          if (page == 'login') {
               this.shownav = false
          }else{
            this.shownav = true
          }
       }
    })

   }
  
  @Input() color = "red"
  @Output() testdata  = new EventEmitter<any>();


  ngOnInit(): void {

    let pg = this.activeroutes.snapshot.routeConfig?.path;
    if (pg == 'product') {
      this.shownav = false;
    }
 
  }

  ngAfterContentInit(){
 
  }


  changeval(valu:any){
    this.testdata.emit(valu)
   }

}
