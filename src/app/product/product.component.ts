import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup,  FormControl } from '@angular/forms';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  prfro = 0;
  prto = 10000;
  filtered:any = '';
  ProdList = [
    {
      name:"iphone",
      price:500,
    },

    {
      name:"iphone2",
      price:300,
    }
  ]

 

  constructor(
    private router:Router, 
    private activeroute:ActivatedRoute
    
    ) {

      this.activeroute.params.forEach((els:any)=>{
        this.prfro =  els.pricefrom;
        this.prto =  els.priceto
     }) 
 
   }

 Search  = new FormGroup({
   price_to: new FormControl(''),
   price_from: new FormControl('')
 })

  ngOnInit(): void {
 
    this.filt(this.prfro, this.prto);
  }

  finds(){
    let from:any = this.Search.value.price_from;
    let to:any = this.Search.value.price_to;
    this.router.navigate(['/product', {priceto:to, pricefrom:from}])

    console.log(from, to);

    this.filt(from,to );

  }


  filt(froms:any,  to:any){
    this.filtered =  this.ProdList.filter((el:any)=>{
      return el.price > froms && el.price < to
    })
  }

}
