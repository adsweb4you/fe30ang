import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prod-detals',
  templateUrl: './prod-detals.component.html',
  styleUrls: ['./prod-detals.component.scss']
})
export class ProdDetalsComponent implements OnInit {
  param = '';
  detalsprod:any = '';
  prod = [
    {
      id:2,
      body:"asdas"
    }
  ]

  constructor(private route:ActivatedRoute) {
   this.param = this.route.snapshot.params.id;
   
  this.detalsprod = this.prod.find((el:any)=>{
    return el.id ==   this.param ;
  })

    console.log(this.detalsprod )

   }

  ngOnInit(): void {
  }

}
