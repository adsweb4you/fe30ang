import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentServService {

  constructor(
    private http:HttpClient
  ) { }

 GetComments(){
   return this.http.get('/assets/server/Comments.json')
 }

}
