import { Observable } from 'rxjs/Rx';
import { CompanyService } from '../../services/company/company.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companies:any;
  totalPages:any;
  constructor(private companyService:CompanyService) {
      this.companies={};
      this.totalPages={};
   }

  ngOnInit() {
    this.companyService.getAllCompaniesForModerator().subscribe((data)=>{
      this.companies = data.content;
      this.totalPages = Array(data.totalPages).fill(0).map((x,i)=>i);
      console.log(this.totalPages)
      console.log(data)
    })
  }

}
