import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelesService } from 'src/app/services/hoteles.service';

@Component({
  selector: 'app-info-hoteles',
  templateUrl: './info-hoteles.component.html',
  styleUrls: ['./info-hoteles.component.css']
})
export class InfoHotelesComponent implements OnInit {

  hotel:any = {
    nombre:'',
    categoria:'',
    poblacion:'',
    longitud:'',
    latitud:''
  }
  id: any = [];
  mensaje='';

  constructor(private datosService: HotelesService, private activeRoute: ActivatedRoute,private router:Router) {
    this.id = parseInt(this.activeRoute.snapshot.paramMap.get('id') || '[]');
  }

  ngOnInit(): void {
    this.datosService.get(this.id).subscribe(
      results => {
        this.hotel = results
      }
    );
  }

  updateHotel(){
    this.datosService.update(this.id, this.hotel).subscribe();
    setTimeout(()=>{
      this.router.navigate(['/admin','hoteles'])
    },1000)
  }

}
