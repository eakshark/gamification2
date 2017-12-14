import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth/auth.service";
import { CompanyService } from "../../../services/company/company.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:any;
  companyNames:any;
  constructor(private authService:AuthService,private companyService:CompanyService) {
    this.user={
      username:'',
      password:'',
      confirmPassword:'',
      imageUrl:'',
      companyName:''
    } 
   }

  ngOnInit() {
    this.companyService.getAllCompanies().subscribe((data:any)=>{
      console.log(data)
      this.companyNames = data.object;
      this.user.companyName = this.companyNames[0]
      console.log(this.companyNames)
    });
  }

  submitForm(value){
    this.authService.registerUser(this.user)
  }

}
