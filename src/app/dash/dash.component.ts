import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {

  loaded = false;

  mytest = 'https://images2.boardingschoolreview.com/photo/1122x864/1000/593/img-academy-oqxuxY.jpg';

  homecolor = "#000"

  constructor() { }

  ngOnInit(): void {
 setTimeout(() => {
    this.loaded  = false
 }, 2000);
    

 
  }

 

  addItem(newItem: any) {
    this.mytest = newItem;
  }


  Products = [
    {
      title:"ბანანი",
      price:4.56,
      calcprice:4.56,
      discount:false,
      gift:true,
      wight:[
        150,
        900,
        780,
        1000
      ],

      gal:[
        "assets/img/img2.png",
        "assets/img/img3.png",
        "assets/img/img4.png",
        "assets/img/imgs.png"
      ],
      poster:3
    },

    {
      title:"ფორთოხალი",
      price:6.40,
      calcprice:4.40,
      discount:false,
      gift:false,
      wight:[
        5465,
        98,
        54,
        1321
      ],

      gal:[
        "assets/img/img2.png",
        "assets/img/img3.png",
        "assets/img/img4.png",
        "assets/img/imgs.png"
      ],
      poster:2
    },

    {
      title:"მანდარინი",
      price:4.65,
      discount:false,
      calcprice:4.65,
      gift:true,
      wight:[
        33,
        87,
        54,
        9878
      ],

      gal:[
        "assets/img/img2.png",
        "assets/img/img3.png",
        "assets/img/img4.png",
        "assets/img/imgs.png"
      ],
      poster:1
    }

  ]

 

  sumprice(parent:any, weigh:any){
    let newprce = (this.Products[parent].price *  this.Products[parent].wight[weigh]).toFixed(2);
    this.Products[parent].calcprice  =  Number(newprce);

  }

  changeimg(parent:any, img:any){
    this.Products[parent].poster = img;
  }

}
