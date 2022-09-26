import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from './services/login/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hotelio-angular';

  isLoggedIn:boolean=false;
  role:any;
  constructor(private tokenStorageService: TokenStorageService,private router:Router){

  }

  ngOnInit(){
    if (this.tokenStorageService.getToken()) {
      this.isLoggedIn = true;
      this.role = this.tokenStorageService.getRoles();
    }
  }

  home(){
    if (this.role == "ADMIN") {
      this.router.navigate(['/admin']);
    }
    else
    {
      this.router.navigate(['/home']);
    }
  }

  logout(){
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
