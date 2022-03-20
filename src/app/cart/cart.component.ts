import { Component, OnInit } from '@angular/core';
import {PostServService} from '../Service/post-serv.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  Posts:any = [];
  Findepost:any[] = [];
  cartt:any ;

  constructor(
      private Postreq:PostServService
  ) {

      this.Postreq.GetPosts('').subscribe((post)=>{
      this.Posts = post;

      let parsecart:any = localStorage.getItem('cart');
      let cartList:any = JSON.parse(parsecart);
      this.cartt = cartList;
      cartList.forEach((element:any) => {
        let id = element.prod_id;
        let mycar = this.Posts.find((elem:any) => {
           return elem.id == id;
        });
  
        if (mycar != undefined) {
           this.Findepost.push(mycar)
        }
  
      });
  
  })

   }

  ngOnInit(): void {

 

  }


 

}
