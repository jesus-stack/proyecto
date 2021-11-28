import { Component, OnInit } from '@angular/core';
import { BusquedaService } from 'src/app/services/busqueda.service';
import { VueloService } from 'src/app/services/vuelo.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  vuelos: any[] = [];
  vacio: boolean = true;
  vuelosAgregados: any[] = [];

  constructor(
    private busquedaService: BusquedaService,
    private vuelosService: VueloService
  ) { }

  ngOnInit(): void {
    this.vuelos = this.busquedaService.getBusqueda();
    if (this.vuelos != null) {
      if (this.vuelos.length > 0) {
        this.vacio = false;
      }
    }
    window.sessionStorage.removeItem('vuelos');
  }

  public agregarVuelo(id: any): void {

    let vuelos = this.getVuelosAgregados();
    this.vuelosService.getVueloById(id).subscribe(
      response => {
        let arregloVuelos: any[] = [];
        let nuevoVuelo = response;
        let existe = false;
        if (nuevoVuelo !== null) {
          if (vuelos === []) {
            arregloVuelos.push(nuevoVuelo);
          } else {
            arregloVuelos = vuelos;
            for (let index = 0; index < arregloVuelos.length; index++) {
              if (arregloVuelos[index]._id === nuevoVuelo._id) {
                existe = true;
                arregloVuelos.splice(index, 1);
              }
            }
            if (existe === false) {
              arregloVuelos.push(nuevoVuelo);
            }
          }
        }
        this.vuelosAgregados = arregloVuelos;
        window.sessionStorage.setItem('vuelos', JSON.stringify(arregloVuelos));
      }, error => {
        console.log(error);
      });
    console.log(vuelos);
  }

  public getVuelosAgregados(): any {
    const vuelos = window.sessionStorage.getItem('vuelos');
    if (vuelos) {
      return JSON.parse(vuelos);
    }
    return [];
  }
}
