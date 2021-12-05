import { Component, OnInit } from '@angular/core';
import { RutaService } from '../../../../services/ruta.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ruta-list',
  templateUrl: './ruta-list.component.html',
  styleUrls: ['./ruta-list.component.css']
})
export class RutaListComponent implements OnInit {

  rutas: any = [];

  constructor(
    private rutaService: RutaService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getRutas();
  }

  getRutas() {

    let result = false;

    this.rutaService.getRutas().subscribe(
      response => {
        this.rutas = response;
        console.log(response);
      },
      error => console.log(error)
    );
  }

  deleteRuta(id: String) {
    this.rutaService.deleteRuta(id).subscribe(
      response => {
        this.toastr.success('Ruta eliminada correctamente');
        this.getRutas();
      },
      error => console.log(error)
    );
  }

}

