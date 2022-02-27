import { Component, OnInit  ,  Output, EventEmitter ,  Input} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {


  constrctor() { }
  
  @Input() color = "red"
  @Output() testdata  = new EventEmitter<any>();


  ngOnInit(): void {
  }


  changeval(valu:any){
    this.testdata.emit(valu)
   }

}
