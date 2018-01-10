import { Component, OnInit } from '@angular/core';
import { StepService } from '../../../services/step/step.service';
import { CampaignService } from '../../../services/campaign/campaign.service';

@Component({
  selector: 'app-all-campaign',
  templateUrl: './all-campaign.component.html',
  styleUrls: ['./all-campaign.component.css']
})
export class AllCampaignComponent implements OnInit {

  sub;
  campaigns;
  

  constructor(private stepService:StepService,private campaignService:CampaignService) { 
    this.sub = this.campaignService.campaigns.subscribe(data=>{
      this.campaigns = data;
      console.log(this.campaigns)
    })
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
