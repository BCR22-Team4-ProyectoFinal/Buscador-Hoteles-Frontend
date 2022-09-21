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
    hotel:''
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
    console.log(this.habitacion)
    this.habitacionesService.create(this.habitacion).subscribe(
      data => {
        console.log(data);
      }
    )
  }

}
