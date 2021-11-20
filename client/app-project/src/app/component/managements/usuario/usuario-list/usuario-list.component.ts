import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { get } from 'jquery';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {
  users: User[]  = [];

  constructor(private userService: UserService,http: HttpClient) { }

  ngOnInit(): void {
    get();
  }
get(){
 // let result = [];
  this.userService.get().subscribe(
    response => {
      this.users = response;
     // result = this.users.filter((x:any)=>x.habilitado === true);
      //this.users = result;
    },
    error => console.log(error))
}

}
