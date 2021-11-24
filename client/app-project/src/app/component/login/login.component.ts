import { Component, OnInit } from '@angular/core';
import { User} from '../../models/user'
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import {UserService} from '../../services/user.service';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
UserForm: FormGroup;
  constructor(private fb: FormBuilder,private userService : UserService,
  private toastr: ToastrService,private router:Router) {
    this.UserForm = fb.group({
      user: ['',Validators.required],
    password :['',Validators.required]
    })
  }
  ngOnInit(): void {
  }

  signin(){
    this.userService.signin(this.UserForm.value).subscribe(data=>{

      if(data.success){
        this.toastr.success( 'Autenticacion Exitosa','Iniciar Sesion Usuario');
        if(data.user.role=='admin'){
          this.router.navigate(['dashboard']);
        }else{
          this.router.navigate(['']);
        }

            }else{
              this.toastr.error( data.msg,'Iniciar Sesion Usuario');
            }
    })
  }

}
