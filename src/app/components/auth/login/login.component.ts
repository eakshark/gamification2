import { Component, OnInit } from '@angular/core';
import { AppService } from "../../../services/app/app.service";
import { AuthService } from "../../../services/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:object;


  constructor( private authService:AuthService) {
    this.user={
      username:'',
      password:''
    }
  }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.user)
  }

}
