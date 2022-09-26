import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';
import { PoblacionesService } from 'src/app/services/poblaciones.service';

@Component({
  selector: 'app-poblaciones-admin',
  templateUrl: './poblaciones-admin.component.html',
  styleUrls: ['./poblaciones-admin.component.css']
})
export class PoblacionesAdminComponent implements OnInit {

  poblaciones:any[]=[];
  constructor(private poblacionesService:PoblacionesService) { }

  ngOnInit(): void {
    this.poblacionesService.getAll().subscribe(
      data =>{
        this.poblaciones = data;
      }
    )
  }

  deletePoblacion(id:any){
    if (confirm("Seguro que quieres borrar esta poblacion?")) {
      this.poblacionesService.delete(id).subscribe()
      setTimeout(
        ()=>{
          window.location.reload();
        }
      ,1000);
    }
  }

}
