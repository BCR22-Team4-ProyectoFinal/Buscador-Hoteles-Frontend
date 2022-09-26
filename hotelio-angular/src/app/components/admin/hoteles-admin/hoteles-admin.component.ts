import { Component, OnInit } from '@angular/core';
import { HotelesService } from 'src/app/services/hoteles.service';

@Component({
  selector: 'app-hoteles-admin',
  templateUrl: './hoteles-admin.component.html',
  styleUrls: ['./hoteles-admin.component.css']
})
export class HotelesAdminComponent implements OnInit {

  hoteles:any[]=[];
  constructor(private hotelService:HotelesService) { }

  ngOnInit(): void {
    this.hotelService.getAll().subscribe(
      data =>{
        this.hoteles = data;
      }
    )
  }

  deleteHotel(id:any){
    let confirmacion = confirm("Seguro que quieres borrar el hotel?")
    if (confirmacion) {
      this.hotelService.delete(id).subscribe();
      setTimeout(()=>{
        window.location.reload()
      },1000)
    }

  }

}
