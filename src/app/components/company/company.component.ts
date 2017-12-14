import { Observable } from 'rxjs/Rx';
import { CompanyService } from '../../services/company/company.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companies: any;
  totalPages: number=1;
  currentPage: number = 0;
  constructor(private companyService: CompanyService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((data) => {
      console.log(data)
      this.currentPage = +data["page"]
      this.getCompanies()
    })
  }

  ngOnInit() {
    this.getCompanies()
  }

  getCompanies() {
    this.companyService.getAllCompaniesForModerator(this.currentPage).subscribe((data: any) => {
      console.log(data)
      this.companies = data.content;
      this.totalPages = data.totalPages;
      console.log(this.totalPages)
      console.log(data)
    })
  }
}
