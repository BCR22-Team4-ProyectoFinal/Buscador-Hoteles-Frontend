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
        console.log(data)
        this.hoteles = data;
      }
    )
  }

}
