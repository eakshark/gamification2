import { Component, OnInit } from '@angular/core';
import { StepService } from '../../../services/step/step.service';
import { CampaignService } from '../../../services/campaign/campaign.service';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-all-campaign',
  templateUrl: './all-campaign.component.html',
  styleUrls: ['./all-campaign.component.css']
})
export class AllCampaignComponent implements OnInit {

  sub;
  campaigns;
  isAdmin;
  

  constructor(private stepService:StepService,private campaignService:CampaignService,private authService:AuthService) { 
    this.sub = this.campaignService.campaigns.subscribe(data=>{
      this.campaigns = data;
    })
    this.sub = this.authService.isAdmin.subscribe(data => {
      this.isAdmin = data
      
    });
  }

  deleteCampaign(id){
    this.campaignService.deleteCampaign(id);
  }

  ngOnInit() {
    this.campaignService.getAllMyCampaign()
  }

  onDestroy() {
    if (this.sub) {
      this.sub.unsubscribe()
    }
  }

}
