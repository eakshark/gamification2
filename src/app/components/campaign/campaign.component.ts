import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CompanyService } from '../../services/company/company.service';
import { StepService } from '../../services/step/step.service';
import { Step } from '../../models/Step';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {

  companies: any;
  startDate:any;
  endDate:any;
  description:any;
  company:any;

  steps:Array<Step>

  constructor(private companyService: CompanyService, private stepService: StepService) {
    
  }

  addStep() {
    this.stepService.addStep()
  }

  addCampaign(){
    this.stepService.addCampaign(this.startDate,this.endDate,this.description,this.company)
  }

  ngOnInit() {
    this.companyService.getAllCompanies().subscribe((data: any) => {
      console.log(data)
      this.companies = data.object
    });
  }ß
}
