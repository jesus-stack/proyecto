import { Component, OnInit } from '@angular/core';
import { BusquedaService } from 'src/app/services/busqueda.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  vuelos: any[] = [];
  vacio: boolean = true;

  constructor(
    private busquedaService: BusquedaService
  ) { }

  ngOnInit(): void {
    this.vuelos = this.busquedaService.getBusqueda();
    if(this.vuelos.length > 0){
      this.vacio = false;
    }
  }
}
