import { Component, OnInit } from '@angular/core';
import { HabitacionesService } from 'src/app/services/habitaciones.service';
import { HotelesService } from 'src/app/services/hoteles.service';

@Component({
  selector: 'app-add-habitaciones-admin',
  templateUrl: './add-habitaciones-admin.component.html',
  styleUrls: ['./add-habitaciones-admin.component.css']
})
export class AddHabitacionesAdminComponent implements OnInit {

  guardado:boolean=false;
  habitacion:any = {
    num_habitacion:'',
    libre: true,
    precio_noche:'',
    num_personas:'',
    planta:'',
    hotel:'',
  }
  hoteles:any[] = [];
  constructor(private hotelesService:HotelesService,private habitacionesService:HabitacionesService) { }

  ngOnInit(): void {
    this.hotelesService.getAll().subscribe(
      data=>{
        this.hoteles = data;
      }
    )
  }

  onSubmit(){
    this.hotelesService.get(this.habitacion.hotel).subscribe(
      data =>{
        this.habitacion.hotel = data;
        this.guardado = true;
      }
    )

    setTimeout(()=>{
      this.habitacionesService.create(this.habitacion).subscribe()
    },1000)

  }

  newHabitacion(){
    this.guardado = false;
    this.habitacion = {
      num_habitacion:'',
      libre: true,
      precio_noche:'',
      num_personas:'',
      planta:'',
      hotel:'',
    }
  }

}
