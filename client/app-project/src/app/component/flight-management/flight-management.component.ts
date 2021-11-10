import { Component, OnInit } from '@angular/core';
import { TipoAvionService } from '../../services/tipo-avion.service';

@Component({
  selector: 'app-flight-management',
  templateUrl: './flight-management.component.html',
  styleUrls: ['./flight-management.component.css']
})
export class FlightManagementComponent implements OnInit {

  constructor(private tipoAvionService: TipoAvionService) { }

  ngOnInit(): void {
    console.log(this.tipoAvionService.getTiposAviones());
  }

}
