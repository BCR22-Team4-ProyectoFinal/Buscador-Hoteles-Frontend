import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-buscador-item',
  templateUrl: './buscador-item.component.html',
  styleUrls: ['./buscador-item.component.css']
})
export class BuscadorItemComponent implements OnInit {

  @Input() habitacion = null;

  constructor() { }

  ngOnInit(): void {
  }

}
