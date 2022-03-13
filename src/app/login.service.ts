import { Injectable , } from '@angular/core';
// import { Http2ServerRequest } from 'http2';
// import { addListener } from 'process';
 import { HttpClient  } from  '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  constructor(private http:HttpClient) { }


  checkLogin(){
    let token = sessionStorage.getItem('token');
    if (token == "sadasdasdas3w094r8hjk*(&Z12") {
       return true;
    }

    return false;
  }

  getdata(){
    return this.http.get('http://localhost:4200/assets/data.json')
  }

}
