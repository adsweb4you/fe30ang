import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private userser:LoginService) { }
  
  ngOnInit(): void {

    this.userser.getdata().subscribe((resp)=>{
       console.log(resp);
       
    })


  }

}
