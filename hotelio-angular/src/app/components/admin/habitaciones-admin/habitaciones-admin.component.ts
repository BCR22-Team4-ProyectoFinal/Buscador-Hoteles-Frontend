import { Component, OnInit } from '@angular/core';
import { HabitacionesService } from 'src/app/services/habitaciones.service';

@Component({
  selector: 'app-habitaciones-admin',
  templateUrl: './habitaciones-admin.component.html',
  styleUrls: ['./habitaciones-admin.component.css']
})
export class HabitacionesAdminComponent implements OnInit {

  habitaciones:any[]=[];

  constructor(private habitacionService:HabitacionesService) { }

  ngOnInit(): void {
    this.habitacionService.getAll().subscribe(
      data => {
        this.habitaciones = data;
      }
    )
  }

  deleteHabitacion(id:any){
    let confirmacion = confirm("Seguro que quieres borrar la habitacion?");
    console.log(confirmacion)
    if (confirmacion) {
      this.habitacionService.delete(id).subscribe(
        data =>{
          console.log(data)
        }
      )
    }
  }

  reloadPage(){
    window.location.reload();
  }

}
