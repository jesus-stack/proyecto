import { Component, OnInit } from '@angular/core';
import { TipoAvionService } from '../../services/tipo-avion.service';
import { RutaService } from '../../services/ruta.service';

@Component({
  selector: 'app-flight-management',
  templateUrl: './flight-management.component.html',
  styleUrls: ['./flight-management.component.css']
})
export class FlightManagementComponent implements OnInit {

  tiposAviones = <any>[];
  rutas = <any>[];

  constructor(private tipoAvionService: TipoAvionService, private rutaService: RutaService) { }

  ngOnInit(): void {
    //this.getRutas();
    this.getTiposAviones();
  }

  getTiposAviones(){
    this.tipoAvionService.getTiposAviones().subscribe(
      response => {
        this.tiposAviones = response;
      },
      error => console.log(error)
    );
  }

  getRutas(){
    this.rutaService.getRutas().subscribe(
      response => {
        this.rutas = response;
      },
      error => console.log(error)
    );
  }

}
