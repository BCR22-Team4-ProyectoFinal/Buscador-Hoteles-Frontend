import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoblacionesService } from 'src/app/services/poblaciones.service';

@Component({
  selector: 'app-info-poblaciones-admin',
  templateUrl: './info-poblaciones-admin.component.html',
  styleUrls: ['./info-poblaciones-admin.component.css']
})
export class InfoPoblacionesAdminComponent implements OnInit {

  poblacion:any;
  id:any;
  constructor(private datosService: PoblacionesService, private activeRoute: ActivatedRoute,private router:Router) {
    this.id = parseInt(this.activeRoute.snapshot.paramMap.get('id') || '[]');
  }

  ngOnInit(): void {
    this.datosService.get(this.id).subscribe(
      data => {
        this.poblacion = data;
      }
    )
  }

}
