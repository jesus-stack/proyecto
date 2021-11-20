import { Component, OnInit } from '@angular/core';
import { VueloService } from '../../../../services/vuelo.service';

@Component({
  selector: 'app-vuelo-list',
  templateUrl: './vuelo-list.component.html',
  styleUrls: ['./vuelo-list.component.css']
})
export class VueloListComponent implements OnInit {

  vuelos: any = [];

  constructor(
    private vueloService: VueloService
  ) { }

  ngOnInit(): void {
    this.getVuelos();
  }

  getVuelos() {

    let result = false;

    this.vueloService.getVuelos().subscribe(
      response => {
        this.vuelos = response;
        result = this.vuelos.filter((x:any)=>x.habilitado === true);
        this.vuelos = result;
      },
      error => console.log(error)
    );
  }

  deleteVuelo(id: String) {
    this.vueloService.deleteVuelo(id).subscribe(
      response => {
        this.getVuelos();
        alert("Eliminado Correctamente");
      },
      error => console.log(error)
    );
  }

}
