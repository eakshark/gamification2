import { Component, OnInit } from '@angular/core';
import { AppService } from "../../../services/app/app.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:object;


  constructor( private appService:AppService) {
    this.user={
      username:'',
      password:''
    }
  }

  ngOnInit() {
  }

  login(){
    this.appService.obtainAccessToken(this.user)
  }

}
