import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service'

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  UserForm: FormGroup;
  
  constructor(private fb: FormBuilder, private userService: UserService,
    private toastr: ToastrService) {
    this.UserForm = fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      birthdate: ['', Validators.required],
      address: ['', Validators.required],
      phone_number: [''],
      mobile: ['', Validators.required],
    })
  }

  ngOnInit(): void {

  }
  adduser() {
    console.log(this.UserForm)
    this.userService.addUser(this.UserForm.value).subscribe(data => {
      if (data.success) {
        this.toastr.success(data.msg, 'Registro Usuario');
      } else {
        this.toastr.error(data.msg, 'Registro Usuario');
      }


    }, error => {
      this.toastr.success(error, 'Registro Usuario');
    })

  }

}
