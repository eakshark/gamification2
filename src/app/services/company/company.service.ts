import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable()
export class CompanyService {
  constructor(
    private http: HttpClient,
    private router: Router
  )
  { }

  getAllCompanies() {
    const url = "http://localhost:8080/allCompanies";
    return this.http.get(url);
  }
  getAllCompaniesForModerator(page) {
    const url = "http://localhost:8080/company/all?page=" + page;
    let headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.get(url, { withCredentials: true, headers });
  }

}
