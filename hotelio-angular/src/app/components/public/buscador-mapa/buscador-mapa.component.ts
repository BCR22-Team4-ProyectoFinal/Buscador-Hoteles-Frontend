import { Component, OnInit, Input } from '@angular/core';
import { HabitacionesService } from 'src/app/services/habitaciones.service';

@Component({
  selector: 'app-buscador-mapa',
  templateUrl: './buscador-mapa.component.html',
  styleUrls: ['./buscador-mapa.component.css']
})
export class BuscadorMapaComponent implements OnInit {


  habitaciones: any[] = [];
  @Input() poblacion: any;
  habitacionesFiltradas: Array <any> = [];

  constructor(private habitacionesService: HabitacionesService) {}

  ngOnInit(): void {
    this.filtrar();
    this.listarHabitaciones();

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

  filtrar(): void {
    this.habitacionesFiltradas = [];
    this.habitacionesService.getAll()
      .subscribe(
        data => {
          for (let index = 0; index < data.length; index++) {
            const element = data[index];
            if (element["hotel"]["poblacion"]["nombre"].toLowerCase().includes(this.poblacion.toLowerCase())) {
              this.habitacionesFiltradas.push(element)
            }

          }
          this.habitaciones = data;
          console.log(data[0]["hotel"]["poblacion"]["nombre"]);
        },
        error => {
          console.log(error);
        });
  }


}
