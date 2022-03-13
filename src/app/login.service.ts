import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  constructor() { }


  checkLogin(){
    let token = sessionStorage.getItem('token');
    if (token == "sadasdasdas3w094r8hjk*(&Z12") {
       return true;
    }

    return false;
  }

}
