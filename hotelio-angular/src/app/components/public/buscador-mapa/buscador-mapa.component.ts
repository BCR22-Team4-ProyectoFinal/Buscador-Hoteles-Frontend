import { Component, OnInit, Input } from '@angular/core';
import { HabitacionesService } from 'src/app/services/habitaciones.service';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';

@Component({
  selector: 'app-buscador-mapa',
  templateUrl: './buscador-mapa.component.html',
  styleUrls: ['./buscador-mapa.component.css']
})
export class BuscadorMapaComponent implements OnInit {

  public load: boolean = false;

  @Input() poblacion: any;
  habitacionesFiltradas: Array<any> = [];

  isLoggedIn= false;

  constructor(private habitacionesService: HabitacionesService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorageService.getToken()) {
      this.isLoggedIn = true;
    }
    setTimeout(() => {
      this.load = true;
    }, 1000);
    this.filtrar();
    this.listarHabitaciones();
  }

  listarHabitaciones(): void { /* methods implementation  */
    this.habitacionesService.getAll()
      .subscribe(
        data => {
          this.habitacionesFiltradas = data;
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
        },
        error => {
          console.log(error);
        });
  }


}
