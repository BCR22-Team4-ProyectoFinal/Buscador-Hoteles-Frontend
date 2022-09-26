import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios:any[]=[];
  constructor(private usuariosService:UsuariosService) { }

  ngOnInit(): void {
    this.usuariosService.getAll().subscribe(
      data =>{
        this.usuarios = data;
      }
    )
  }

  deleteUser(id:any){
    if (confirm("Seguro que quieres borrar este usuario?")) {
      this.usuariosService.delete(id).subscribe();
      setTimeout(
        ()=>{
          window.location.reload();
        }
      ,1000);
    }

  }

}
