import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HabitacionesService } from 'src/app/services/habitaciones.service';

@Component({
  selector: 'app-info-habitaciones-admin',
  templateUrl: './info-habitaciones-admin.component.html',
  styleUrls: ['./info-habitaciones-admin.component.css']
})
export class InfoHabitacionesAdminComponent implements OnInit {

  habitacion:any = {
    numero:'',
    planta:'',
    libre:'',
    num_personas:'',
    hotel:'',
    precio:''
  }
  id:any;

  constructor(private datosService: HabitacionesService, private activeRoute: ActivatedRoute,private router:Router) {
    this.id = parseInt(this.activeRoute.snapshot.paramMap.get('id') || '[]');
  }

  ngOnInit(): void {
    this.datosService.get(this.id).subscribe(
      results => {
        this.habitacion = results
      }
    );
  }

}
