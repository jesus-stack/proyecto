import { Component, OnInit } from '@angular/core';
import { get } from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { CompraService } from 'src/app/services/compra.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-compra-list',
  templateUrl: './compra-list.component.html',
  styleUrls: ['./compra-list.component.css']
})
export class CompraListComponent implements OnInit {

  compras: any = [];
  usuario: any = {};

  constructor(
    private compraService: CompraService,
    private toastr: ToastrService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    let result = [];
    this.compraService.get().subscribe(
      response => {
        this.compras = response;

        result = this.compras.filter((x: any) => x.habilitado === true);
        this.compras = result;
      },
      error => console.log(error))
  }
  delete(id: string) {

    this.compraService.delete(id).subscribe(
      response => {
        this.get();
        this.toastr.success('Compra eliminada correctamente');
      },
      error => {
        this.toastr.error('No se pudo procesar la solicitud');
        console.log(error)
      }
    );
  }
}
