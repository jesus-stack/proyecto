import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {

  busqueda: any[] = [];

  constructor() { }

  getBusqueda(){
    return this.busqueda;
  }

  setBusqueda(valores: any){
    this.busqueda = valores;
  }
}
