import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../components/auth/login/login.component';
import { RegisterComponent } from '../components/auth/register/register.component';
import { CompanyComponent } from '../components/company/company.component';
import { CampaignComponent } from '../components/campaign/campaign.component';
import { AllCampaignComponent } from '../components/campaign/all-campaign/all-campaign.component';
import { AddCompanyComponent } from '../components/company/add-company/add-company.component';


const routes: Routes = [
 
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'companies/all/:page',
    component: CompanyComponent
  },
  {
    path: 'campaign/add',
    component: CampaignComponent
  },
  {
    path: 'campaign/all',
    component: AllCampaignComponent
  },
  {
    path: 'company/add',
    component: AddCompanyComponent
  }

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }