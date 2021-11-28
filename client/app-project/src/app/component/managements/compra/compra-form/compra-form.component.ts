import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompraService } from 'src/app/services/compra.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-compra-form',
  templateUrl: './compra-form.component.html',
  styleUrls: ['./compra-form.component.css']
})
export class CompraFormComponent implements OnInit {

  compraForm = new FormGroup({
    Usuario:new FormControl('', Validators.required),
    Cantidad : new FormControl(0, Validators.required),
    Subtotal: new FormControl(0, Validators.required),
    Descuento : new FormControl(0, Validators.required),
    MontoTotal : new FormControl(0, Validators.required),

  });


  users = <any>[];
 compra  : any={};
  editMode = false;
  constructor(private compraservice : CompraService,private  router : Router,
    private userService: UserService,private activeRoute: ActivatedRoute,private toastr : ToastrService) { }

  ngOnInit(): void {
    this.getuser();
    this.validarId();
  }

  getuser(){
    let result = [];
     this.userService.get().subscribe(
       response => {
         this.users = response;
         result = this.users.filter((x:any)=>x.habilitado === true);
         this.users = result;
       },
       error => console.log(error))
   }
   validarId() {

    this.activeRoute.params.subscribe(param => {
      if (param.id) {
        this.editMode = true;
        this.compraservice.getById(param.id).subscribe(data => {
          this.compra = data;
          this.compraForm.setValue({
            Usuario: data.Usuario,
            Cantidad : data.Cantidad,
            Subtotal: data.Cantidad,
            Descuento : data.Descuento,
            MontoTotal : data.MontoTotal ,
          });
        });
      }
    }
    );
  }

  submitForm() {
    if (this.compraForm.valid) {
      if(this.editMode){
        this.compraservice.update(this.compra._id,this.compraForm.value).subscribe(
          response => {
            if (response.success) {
              this.toastr.success(response.msg, 'Registro Usuario');
            } else {
              this.toastr.error(response.msg, 'Registro Usuario');
            }

            this.router.navigate(['dashboard/compra/list']);
          },
          error => console.log(error)
        )
      }else{
        this.compraservice.create(this.compraForm.value).subscribe(
          response => {
            if (response.success) {
              this.toastr.success(response.msg, 'Registro Usuario');
            } else {
              this.toastr.error(response.msg, 'Registro Usuario');
            }
            this.router.navigate(['dashboard/compra/list']);
          },
          error => console.log(error)
        )
      }
    } else {
      alert("Ha ocurrido un error");
    }
  }

}
