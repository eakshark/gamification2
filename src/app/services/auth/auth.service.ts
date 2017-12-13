import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {

  constructor(private  http:HttpClient,private router:Router) { }

  registerUser(user:Object){
    this.http.post("http://localhost:8080/register",user).subscribe(()=>{
      this.router.navigateByUrl('/');
    })
  }

}
