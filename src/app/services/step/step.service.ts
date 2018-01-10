import { BehaviorSubject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';



import {Step} from './../../models/Step'

@Injectable()
export class StepService {

  steps: BehaviorSubject<Array<Step>> = new BehaviorSubject([]);;

  constructor(private http: HttpClient
    , private router: Router) { }


  addStep() {
    let arr = []
    arr.concat(this.steps.value);
    Array.prototype.push.apply(arr, this.steps.value);
    arr.push(new Step())
    this.steps.next(arr)
  }

  saveSteps(steps){
    console.log(steps)
  }

  addCampaign(startDate,endDate,description,company){
    let loginData = {
      startDate,
      endDate,
      description,
      company,
      steps:this.steps.value
    }
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    console.log(loginData)
    this.http.post('http://localhost:8080/campaign/add', JSON.stringify(loginData), { withCredentials: true ,headers})
    .subscribe((data: any) => {
      
      this.router.navigateByUrl('/campaign/all');
      
    },
    err => {
      
    });
  }

  getAllMyCampaign(){
    
    this.http.get('http://localhost:8080/campaign')
    .subscribe((data: any) => {
      
      console.log(data)

    },
    err => {
      
    });
  }
}
