import { BehaviorSubject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class CampaignService {

  campaigns: BehaviorSubject<Array<any>> = new BehaviorSubject([]);;
  

  constructor(private http:HttpClient) { }


  getAllMyCampaign(){
    
    this.http.get('http://localhost:8080/campaign')
    .subscribe((data: any) => {
      
      this.campaigns.next(data.object.content)
      console.log(data.object.content)

    },
    err => {
      
    });
  }


}
