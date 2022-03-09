import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prod-detals',
  templateUrl: './prod-detals.component.html',
  styleUrls: ['./prod-detals.component.scss']
})
export class ProdDetalsComponent implements OnInit {
  param = '';
  active = '';
  price = '';
  detalsprod:any = '';
  prod = [
    {
      id:2,
      body:"asdas",
      active:4
    }
  ]

  constructor(private route:ActivatedRoute) {
   this.param = this.route.snapshot.params.id;
   
   this.route.params.forEach((els:any)=>{
    this.active =  els.active;
    this.price =  els.price
 }) 

  this.detalsprod = this.prod.find((el:any)=>{
    return el.id  ==   this.param &&  el.active  ==   this.active;
  })

 

    console.log(this.active,  this.price);

   }

  ngOnInit(): void {
  }

}
