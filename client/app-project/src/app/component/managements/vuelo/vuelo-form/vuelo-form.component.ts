import { Component, OnInit } from '@angular/core';
import { TipoAvionService } from '../../../../services/tipo-avion.service';
import { RutaService } from '../../../../services/ruta.service';
import { VueloService } from '../../../../services/vuelo.service';

@Component({
  selector: 'app-vuelo-form',
  templateUrl: './vuelo-form.component.html',
  styleUrls: ['./vuelo-form.component.css']
})
export class VueloFormComponent implements OnInit {

  tiposAviones = <any>[];
  rutas = <any>[];

  constructor(
    private tipoAvionService: TipoAvionService,
    private rutaService: RutaService,
    private vueloService: VueloService,
  ) { }

  ngOnInit(): void {
    this.getRutas();
    this.getTiposAviones();
  }

  getTiposAviones() {
    this.tipoAvionService.getTiposAviones().subscribe(
      response => {
        this.tiposAviones = response;
      },
      error => console.log(error)
    );
  }

  getRutas() {
    this.rutaService.getRutas().subscribe(
      response => {
        this.rutas = response;
      },
      error => console.log(error)
    );
  }

  /*addVuelo(form: NgForm) {
    this.vueloService.createVuelo(form.value).subscribe(
      response => console.log(response),
      error => console.log(error)
    )
  }*/

}
