import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private User = {
    email:"info@admin.ge",
    pasww:"123"
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  userlogin = new FormGroup({
    email: new FormControl(),
    pass: new FormControl()
  })

  login(){
    let email = this.userlogin.value.email;
    let pass = this.userlogin.value.pass

    if (this.User.email == email && pass == this.User.pasww) {
      sessionStorage.setItem('token', 'sadasdasdas3w094r8hjk*(&Z12');
      this.router.navigate(['/profile'])
    } 

  }

}
