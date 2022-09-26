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
        this.reservas = data;
      }
    )
  }

  deleteReserva(id:any){
    if (confirm("Seguro que quieres borrar esta reserva?")) {
      this.reservasService.delete(id).subscribe()
      setTimeout(
        ()=>{
          window.location.reload();
        }
      ,1000);
    }
  }

}
