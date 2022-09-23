import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  rol:any;
  url:any;
  constructor(private tokenStorageService: TokenStorageService,private router:Router) { }

  ngOnInit(): void {
    this.rol =this.tokenStorageService.getRoles();
    this.route();
  }

  route(){
    if (this.rol == "ADMIN") {
      this.url = '/admin';
    }
    else
    {
      this.url = '/home';
    }
  }

}
