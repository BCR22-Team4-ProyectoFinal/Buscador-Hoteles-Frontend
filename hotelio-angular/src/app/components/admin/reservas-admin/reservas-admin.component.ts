import { Component, OnInit } from '@angular/core';
import { ReservasService } from 'src/app/services/reservas.service';

@Component({
  selector: 'app-reservas-admin',
  templateUrl: './reservas-admin.component.html',
  styleUrls: ['./reservas-admin.component.css']
})
export class ReservasAdminComponent implements OnInit {

  reservas:any[]=[];
  constructor(private reservasService:ReservasService) { }

  ngOnInit(): void {
    this.reservasService.getAll().subscribe(
      data =>{
        console.log(data)
        this.reservas = data;
      }
    )
  }

}
