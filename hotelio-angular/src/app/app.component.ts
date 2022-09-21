import { Component } from '@angular/core';
import { TokenStorageService } from './services/login/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hotelio-angular';

  isLoggedIn:boolean=false;
  constructor(private tokenStorageService: TokenStorageService){

  }

  ngOnInit(){
    if (this.tokenStorageService.getToken()) {
      this.isLoggedIn = true;
    }
  }

  logout(){
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
