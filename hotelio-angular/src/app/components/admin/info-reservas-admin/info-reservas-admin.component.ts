import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservasService } from 'src/app/services/reservas.service';

@Component({
  selector: 'app-info-reservas-admin',
  templateUrl: './info-reservas-admin.component.html',
  styleUrls: ['./info-reservas-admin.component.css']
})
export class InfoReservasAdminComponent implements OnInit {
  reserva:any;
  id: any = [];
  mensaje='';

  constructor(private datosService: ReservasService, private activeRoute: ActivatedRoute,private router:Router) {
    this.id = parseInt(this.activeRoute.snapshot.paramMap.get('id') || '[]');
  }

  ngOnInit(): void {
    this.datosService.get(this.id).subscribe(
      results => {
        this.reserva = results
      }
    );
  }
}
