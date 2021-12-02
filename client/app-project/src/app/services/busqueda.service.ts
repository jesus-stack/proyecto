import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {

  constructor() { }

  getBusqueda() {
    const busqueda = window.sessionStorage.getItem('busqueda');
    if (busqueda) {
      return JSON.parse(busqueda);
    }
  }

  setBusqueda(valores: any) {
    window.sessionStorage.removeItem('busqueda');
    window.sessionStorage.setItem('busqueda', JSON.stringify(valores));
  }

  cargarScript(){
    let script = document.createElement('script');
    script.src = "../../../assets/js/form-home.js";
    let body = document.getElementsByTagName('body')[0];
    body.appendChild(script);
  }
}
