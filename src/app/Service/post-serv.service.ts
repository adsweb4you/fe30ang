import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable   } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostServService {
 
  constructor(private http:HttpClient) { 
 
  }

  GetPosts(mytitle:any){
    return this.http.get('/assets/server/Post.json', {
     params: new  HttpParams().set('tiitle', mytitle )
    })
  }

 

}
