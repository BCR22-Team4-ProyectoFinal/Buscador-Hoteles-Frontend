import { Component, OnInit } from '@angular/core';
import { HotelesService } from 'src/app/services/hoteles.service';
import { PoblacionesService } from 'src/app/services/poblaciones.service';

@Component({
  selector: 'app-addhoteles-admin',
  templateUrl: './addhoteles-admin.component.html',
  styleUrls: ['./addhoteles-admin.component.css']
})
export class AddhotelesAdminComponent implements OnInit {

  guardado:boolean=false;
  hotel:any = {
    nombre:'',
    categoria:'',
    poblacion:'',
    longitud:'',
    latitud:''
  }
  poblaciones:any[] = [];
  poblacion:any;
  constructor(private hotelesService:HotelesService,private poblacionesService:PoblacionesService) { }

  ngOnInit(): void {
    this.poblacionesService.getAll().subscribe(
      data =>  {
        this.poblaciones = data;
      }
    )
  }

  onSubmit(){
    this.poblacionesService.get(this.hotel.poblacion).subscribe(
      data => {
        this.hotel.poblacion= data
      }
    )
    setTimeout(()=>{
      this.hotelesService.create(this.hotel).subscribe(
        data => {
          console.log(data);
        }
      )
    }
    ,1000)

  }

}
