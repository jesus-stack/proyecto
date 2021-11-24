import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { param } from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  UserForm: FormGroup;
  editmode= false;
  id:string="";


  constructor(private fb: FormBuilder, private userService: UserService,
    private toastr: ToastrService,private aroute: ActivatedRoute,
    private route: Router) {
      this.UserForm = fb.group({
        user: ['', Validators.required],
        password: ['', Validators.required],
        name: ['', Validators.required],
        email: ['', Validators.required],
        birthdate: ['', Validators.required],
        address: ['', Validators.required],
        phone_number: [''],
        mobile: ['', Validators.required],
        role : ['user', Validators.required]
      })
    }


  ngOnInit(): void {
this.aroute.params.subscribe(param=>{
if(param.id){
  this.editmode=true;
  this.id=param.id;
  this.userService.getById(param.id).subscribe(data=>{
    this.UserForm = this.fb.group({
      user: [data.user, Validators.required],
      password: [data.password, Validators.required],
      name: [data.name, Validators.required],
      email: [data.email, Validators.required],
      birthdate: [data.birthdate, Validators.required],
      address: [data.address, Validators.required],
      mobile: [data.mobile, Validators.required],
      role : [data.role, Validators.required]
    })

});
}
});
  }


  adduser() {
    console.log(this.UserForm)
    if(this.editmode){
    this.userService.update(this.id, this.UserForm.value).subscribe(data => {
      if (data.success) {
        this.toastr.success(data.msg, 'Registro Usuario');
      } else {
        this.toastr.error(data.msg, 'Registro Usuario');
      }


    }, error => {
      this.toastr.success(error, 'Registro Usuario');
    });}
    else{
      this.userService.addUser(this.UserForm.value).subscribe(data => {
        if (data.success) {
          this.toastr.success(data.msg, 'Registro Usuario');
        } else {
          this.toastr.error(data.msg, 'Registro Usuario');
        }


      }, error => {
        this.toastr.success(error, 'Registro Usuario');
      });
    }
    this.route.navigate(['dashboard/management/user/list']);

  }

}
