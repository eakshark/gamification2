import { BehaviorSubject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';



@Injectable()
export class CampaignService {

  campaigns: BehaviorSubject<Array<any>> = new BehaviorSubject([]);;
  

  constructor(private http:HttpClient,
    private router: Router) { }


  getAllMyCampaign(){
    
    this.http.get('http://localhost:8080/campaign')
    .subscribe((data: any) => {
      
      this.campaigns.next(data.object.content)
      console.log(data.object.content)

    },
    err => {
      
    });
  }

  deleteCampaign(id){
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    this.http.post('http://localhost:8080/campaign/delete/'+id, { withCredentials: true ,headers})
    .subscribe((data: any) => {
      this.campaigns.next(this.campaigns.value.filter(a=>a.id != id))
      this.router.navigateByUrl('campaigns/all');
      
    },
    err => {
      
    });
  }


}
