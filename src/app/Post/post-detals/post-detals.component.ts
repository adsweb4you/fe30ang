import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CommentServService} from '../../Service/comment-serv.service';
import {PostServService} from '../../Service/post-serv.service'
 
@Component({
  selector: 'app-post-detals',
  templateUrl: './post-detals.component.html',
  styleUrls: ['./post-detals.component.scss']
})
export class PostDetalsComponent implements OnInit {

  Comments:any = '';
  Posts:any = '';
  post_id:any = '';
  constructor(
    private comment:CommentServService,
    private Post:PostServService,
    private activroute:ActivatedRoute
  ) { 

    this.post_id = activroute.snapshot.paramMap.get('id');
   
  }

  ngOnInit(): void {
    //getcomment (array)
    this.comment.GetComments().subscribe((comnt:any)=>{
      this.Comments = comnt.filter((el:any)=>{
        return el.post_id == this.post_id
      });
    })

 

   //getpost (array)
   this.Post.GetPosts('all').subscribe((post:any)=>{
    this.Posts = post.find((pos:any)=>{
      return pos.id == this.post_id;
    });
  })

  }

}
