import { Component, OnInit, Input } from '@angular/core';
import { Habitaciones } from 'src/app/models/habitaciones.model';

@Component({
  selector: 'app-buscador-item',
  templateUrl: './buscador-item.component.html',
  styleUrls: ['./buscador-item.component.css']
})
export class BuscadorItemComponent implements OnInit {

  @Input() habitacion: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
