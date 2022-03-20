import { Component, OnInit } from '@angular/core';
import {PostServService} from '../../Service/post-serv.service';
import { MatSliderModule } from '@angular/material/slider';
import { Options , ChangeContext , PointerType  } from '@angular-slider/ngx-slider';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {


  minValue: number = 50;
  maxValue: number = 200;
  options: Options = {
    floor: 0,
    ceil: 250
  };

  logText:string = ''

  onUserChangeEnd(changeContext: ChangeContext): void {
    this.logText += `onUserChangeEnd(${this.getChangeContextString(changeContext)})\n`;
  }

  getChangeContextString(changeContext: ChangeContext): string {
    return `{pointerType: ${changeContext.pointerType === PointerType.Min ? 'Min' : 'Max'}, ` +
           `value: ${changeContext.value}, ` +
           `highValue: ${changeContext.highValue}}`;
  }

  constructor(
    private Postreq:PostServService
  ) { }

  Posts:any = '';
  Findepost:any = '';
  ngOnInit(): void {

    this.Postreq.GetPosts('ტესტ').subscribe((post)=>{
        this.Posts = post;
        this.Findepost = post;
    })
   
 

  }

  StrLimit(slic:number, title:string){
    let nsstring = title.slice(0, slic)
    return nsstring;

  }

  timeout:any  = '';

  findPost(val:any){

    clearTimeout(this.timeout);

this.timeout = setTimeout(()=>{
  
  this.Findepost = this.Posts.filter((el:any)=>{
    return el.title.toLowerCase().search(val.toLowerCase())  !== -1 || el.id == val
  })

  }, 500)
  }


  addcart(id:number){
    let cart = localStorage.getItem('cart')
 

    if (cart == null) {
      let cartprod = {
        prod_id:id,
        count:1
      }
     
      let cartarray:any  = [];
      cartarray.push(cartprod);
      cartarray = JSON.stringify(cartarray)

     localStorage.setItem('cart', cartarray)
    }else{
      let parsecart:any = localStorage.getItem('cart');
      let cartList:any = JSON.parse(parsecart)
     

      // find prod
      let finded = cartList.find((el:any)=>{
        return el.prod_id == id
      })
       
      // add new item
      if (finded == undefined) {
        let cartprod = {
          prod_id:id,
          count:1
        }
        cartList.push(cartprod)
        cartList = JSON.stringify(cartList)
        localStorage.setItem('cart', cartList)

      }else{
        // item update

       let index =  cartList.findIndex((myel:any)=>{
          return myel.prod_id == id
        })
        
        // updated element
        cartList[index].count = ++cartList[index].count;
        cartList = JSON.stringify(cartList)
        localStorage.setItem('cart', cartList)

      }
 

    }


  }

}
