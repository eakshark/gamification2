import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from "../../../services/auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public isAuthenticated;
  public isAdmin;
  public user;

  private sub;


  constructor(private authService: AuthService) {
    
    this.sub = this.authService.isAuthenticated.subscribe(data => {
      this.isAuthenticated = data
      
    });
     this.sub = this.authService.isAdmin.subscribe(data => {
      this.isAdmin = data
      
    });
    this.sub = this.authService.user.subscribe(data => {
      this.user = data
      
    });
  }
  logout(){
   sessionStorage.clear();
    // this.isAuthenticated=false;
    this.authService.logout()

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubsribe();
    }
  }

}
