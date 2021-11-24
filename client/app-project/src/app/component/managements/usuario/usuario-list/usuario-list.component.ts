import { Component, OnInit } from '@angular/core';
import { get } from 'jquery';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {
  users: any  = [];

  constructor(private userService: UserService,private toastr : ToastrService) { }

  ngOnInit(): void {
   this.get();
  }
  getShortdate(fecha:Date):String{
    let year = fecha.getFullYear;
    let month = fecha.getMonth();
    let day = fecha.getDay();


    return day+"-"+month+"-"+year;

  }
get(){
 let result = [];
  this.userService.get().subscribe(
    response => {
      this.users = response;
      result = this.users.filter((x:any)=>x.habilitado === true);
      this.users = result;
    },
    error => console.log(error))
}
delete(id : string){
  this.userService.delete(id).subscribe(
    response => {
      this.get();
      this.toastr.success( 'Eliminado Exitosamente','Mantenimiento Usuario');

    },
    error => {
      this.toastr.success( 'Ha ocurrido un error','Mantenimiento Usuario');
    console.log(error)}
  );
}

}
