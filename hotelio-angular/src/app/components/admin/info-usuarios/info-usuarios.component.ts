import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-info-usuarios',
  templateUrl: './info-usuarios.component.html',
  styleUrls: ['./info-usuarios.component.css']
})
export class InfoUsuariosComponent implements OnInit {

  usuario:any;
  id: any = [];
  mensaje='';

  constructor(private datosService: UsuariosService, private activeRoute: ActivatedRoute,private router:Router) {
    this.id = parseInt(this.activeRoute.snapshot.paramMap.get('id') || '[]');
  }

  ngOnInit(): void {
    this.datosService.get(this.id).subscribe(
      results => {
        this.usuario = results
      }
    );
  }
}
