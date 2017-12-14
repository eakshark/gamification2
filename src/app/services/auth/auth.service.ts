import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
@Injectable()
export class AuthService {
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject(false);
  user: BehaviorSubject<any> = new BehaviorSubject({});
  isAdmin: BehaviorSubject<boolean> = new BehaviorSubject(false);



  constructor(private http: HttpClient, private router: Router) {
    if (sessionStorage.getItem("isAuthenticated") === "true") {
      this.isAuthenticated.next(true)
    }

    if (sessionStorage.getItem("isAdmin") === "true") {
      this.isAdmin.next(true)
    }
  }

  registerUser(user: Object) {
    this.http.post("http://localhost:8080/register", user).subscribe(() => {
      this.router.navigateByUrl('/login');
    })
  }

  login(loginData) {

    this.http.post('http://localhost:8080/login/angular', loginData, { withCredentials: true })
      .subscribe((data: any) => {
        console.log(data)
        //let obj = data.object
        this.isAuthenticated.next(true)
        this.user.next(data.object)
        for (let role of data.object.role) {
          if (role === "ROLE_ADMIN") {
            this.isAdmin.next(true)
            sessionStorage.setItem("isAdmin", "true")
          }
        }

      });
    sessionStorage.setItem("isAuthenticated", "true")

    this.router.navigateByUrl('/');

  }

  logout() {
    let headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Origin', '*');
    this.http.get('http://localhost:8080/logout2', { withCredentials: true, headers })
      .subscribe((data) => {
        this.isAuthenticated.next(false)
        this.router.navigateByUrl('/');
        sessionStorage.clear()
        this.isAdmin.next(false)

      });
  }

}
