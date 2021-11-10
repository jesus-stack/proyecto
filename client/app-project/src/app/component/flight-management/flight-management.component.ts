import { Component, OnInit } from '@angular/core';
import { TipoAvionService } from '../../services/tipo-avion.service';

@Component({
  selector: 'app-flight-management',
  templateUrl: './flight-management.component.html',
  styleUrls: ['./flight-management.component.css']
})
export class FlightManagementComponent implements OnInit {

  tiposAviones = <any>[];

  constructor(private tipoAvionService: TipoAvionService) { }

  ngOnInit(): void {
    this.getTiposAviones();
  }

  getTiposAviones(){
    this.tipoAvionService.getTiposAviones().subscribe(
      response => {
        this.tiposAviones = response;
        console.log(this.tiposAviones);
      },
      error => console.log(error)
    );
  }

}
