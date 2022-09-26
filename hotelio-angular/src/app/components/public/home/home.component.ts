import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn=false;
  isSearching = false;
  poblacion:any;
  constructor(private tokenStorageService: TokenStorageService, private router:Router) { }

  ngOnInit(): void {
    if (this.tokenStorageService.getToken()) {
      this.isLoggedIn = true;
    }
  }

  buscar(){
    if (!this.isLoggedIn) {
      window.alert("Para poder buscar hotel debes loguearte")
      this.router.navigate(['/','login'])
    }else{
      this.isSearching=true;
    }

  }

}
