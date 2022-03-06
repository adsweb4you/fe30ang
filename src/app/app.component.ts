import { Component } from '@angular/core';
import { FormGroup,  FormControl , Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  discount = {
    myname:true,
    gift:false,
    news:true,
  };

  activeclass = [
     true,false,false
  ]
 
 discs = true;

  size = '15px';

  style = {'font-size': this.size, 'color':'red'};
  poster = 'assets/img/img2.png'

  changeprop(color:any, img:any, ind:any){
    this.style.color = color;
    this.poster = img;

   this.activeclass =  this.activeclass.map(element => {
      return element = false;
    });

    this.activeclass[ind] =  true;
  }


 Product = [
   {
     price:1000,
     discprice:800,
   },

   {
    price:450,
    discprice:400,
  },

  {
    price:600,
    discprice:false,
  },
 ]

 leng = 'ka';

 proc:any = 0;

 langs = [
   "ka",
   "en",
   "fr",
   "de"
 ]

 

 disclacl(ind:any = 0){

  setTimeout(()=>{
  let findedpro:any = this.Product.find((el, inds)=>{
  return inds == ind
  })

  let disc =    (findedpro.discprice/findedpro.price) * 100

  this.proc = ( 100 - disc).toFixed() + "%";
  }, 500)



 }


 Users = [
   {
     name:"admin",
     role:1,
     avatar:"assets/img/img2.png",
     phone:5456489798,
     email:"info@admin.ge",
     verify:true
   },
   {
    name:"admin",
    role:1,
    avatar:"assets/img/img2.png",
    phone:5456489798,
    email:"info@admin.ge",
    verify:false
  },

  {
    name:"admin",
    role:1,
    avatar:"assets/img/img2.png",
    phone:5456489798,
    email:"info@admin.ge",
    verify:false,
    addre:[
      "მისამართი 1",
      "მისამართი 2",
      "მისამართი 3",
      "მისამართი 41",
    ],
    basicaddr:1,
  },
  {
    name:"admin",
    role:1,
    avatar:"assets/img/img2.png",
    phone:5456489798,
    email:"info@admin.ge",
    verify:true
  },
  {
    name:"admin",
    role:1,
    avatar:"assets/img/img2.png",
    phone:5456489798,
    email:"info@admin.ge",
    verify:true
  },

 ]

appcolor = ''
 title = new FormControl('');

 Registerform = new FormGroup({
    name: new FormControl(''),
    // email: new FormControl('', [Validators.email, ]),
    // phone: new FormControl('', [Validators.pattern('[/@/gi]')]),
    email: new FormControl(''),
    phone: new FormControl(''),
    body: new FormControl(''),
    color : new FormControl(''),
 })
 
 check:any = [];

 pushcolro(color:any){

  let findedindex  = this.check.find((el:any)=>{
    return el == color
  })

  let index = this.check.indexOf(findedindex)

  
  if (findedindex == undefined) {
     this.check.push({colors:color})
  }else{
    this.check.splice(index, 1 )
  }


  
  this.Registerform.patchValue({
    color:  this.check
  })

  console.log(this.Registerform.value)

 }

 get name(){
   return this.Registerform.get('name')
 }

 get email(){
  return this.Registerform.get('email')
}

 cncolor(){
   this.appcolor = this.title.value
 }

 update(){
   this.title.setValue('sdfdsf')
 }

 formdata(){
  console.log(this.Registerform.value)
 }

 // color = ''
//   show = true;

//   appname = {
//     title:"ცვლადი",
//     age:25
//   }

//   iimgwid:any = 50;
//   color = '';

//   appimg = "/assets/img/imgs.png"

 
 

//   incrsize(e:any){
//  //   e.target.style.color = "red"
//     this.color = "red";
//    this.iimgwid += 50;
//   }

//   toggle(){
//     this.show = !this.show;
//   }

}
