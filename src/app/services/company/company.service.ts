import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable()
export class CompanyService {

  constructor(
    private http: HttpClient,
    private router: Router
  )
  {}

  getAllCompanies(){
    const url="http://localhost:8080/allCompanies";
    return this.http.get(url);
  }
  getAllCompaniesForModerator(){
    const url="http://localhost:8080/company/all";
    return this.http.get(url,{withCredentials:true});
  }

}
