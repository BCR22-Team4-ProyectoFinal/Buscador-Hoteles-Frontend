import { Component, OnInit, Input } from '@angular/core';
import { Habitaciones } from 'src/app/models/habitaciones.model';
import { HabitacionesService } from 'src/app/services/habitaciones.service';

@Component({
  selector: 'app-buscador-mapa',
  templateUrl: './buscador-mapa.component.html',
  styleUrls: ['./buscador-mapa.component.css']
})
export class BuscadorMapaComponent implements OnInit {

  habitaciones?: Habitaciones[];

  constructor(private habitacionesService: HabitacionesService) { }

  ngOnInit(): void {

  }

  listarHabitaciones(): void { /* methods implementation  */
  this.habitacionesService.getAll()
    .subscribe(
      data => {
        this.habitaciones = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
}


}
