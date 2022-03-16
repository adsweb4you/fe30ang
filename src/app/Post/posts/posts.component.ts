import { Component, OnInit } from '@angular/core';
import {PostServService} from '../../Service/post-serv.service'
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

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

}
