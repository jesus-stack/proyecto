import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  vuelosAgregados: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.vuelosAgregados = this.getVuelosAgregados();
    console.log(this.vuelosAgregados);
    
  }

  public getVuelosAgregados(): any {
    const vuelos = window.sessionStorage.getItem('vuelos');
    if (vuelos) {
      return JSON.parse(vuelos);
    }
    return [];
  }

  agregarAsiento(id: any){
    alert(id);
  }

  deleteVueloAgregado(id: any){
    alert("f");
  }

}
