import { Injectable } from '@angular/core';
import {
  Http, RequestOptions, Headers, Response
} from '@angular/http'
import {HttpClient} from '@angular/common/http'
import {Cookie} from 'ng2-cookies'
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


export class Foo {
  constructor(
    public id: number,
    public name: string) { }
}


@Injectable()
export class AppService {
  constructor(
    private _router: Router, private http: HttpClient) { }

  obtainAccessToken(loginData) {
    
    this.http.post('http://localhost:8080/login/angular', loginData,{withCredentials:true})
      .map(res => console.log(res) )
      .subscribe();
  }

}