import { CompanyService } from '../../../services/company/company.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {


  name;

  constructor(private companyService:CompanyService) { 
    this.name = ""
    
  }

  ngOnInit() {
  }

  addCompany(){
    this.companyService.addCompany(this.name)
  }

}
