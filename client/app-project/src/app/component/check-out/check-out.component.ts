import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  vuelosAgregados: any[] = [];

  constructor(
    private location: Location,
    private router: Router,
    private token: TokenStorageService
    ) { }

  ngOnInit(): void {
    this.vuelosAgregados = this.getVuelosAgregados();
  }

  public getVuelosAgregados(): any {
    const vuelos = window.sessionStorage.getItem('vuelos');
    if (vuelos) {
      return JSON.parse(vuelos);
    }
    return [];
  }

  agregarAsiento(id: any, num: number){
    for (let index = 0; index < this.vuelosAgregados.length; index++) {
      if (this.vuelosAgregados[index]._id === id) {
        this.vuelosAgregados[index].asiento = num;
      }
    }
  }

  deleteVueloAgregado(id: any){
    for (let index = 0; index < this.vuelosAgregados.length; index++) {
      if (this.vuelosAgregados[index]._id === id) {
        this.vuelosAgregados.splice(index, 1);
      }
    }
    window.sessionStorage.removeItem('vuelos');
    window.sessionStorage.setItem('vuelos', JSON.stringify(this.vuelosAgregados));
    this.vuelosAgregados = this.getVuelosAgregados();
  }

  confirmarCompra(){

    if(true){
      if(this.token.getToken() !== null){
        this.router.navigate(['payment']);
      }else{
        window.sessionStorage.setItem('redirigir_pago','true');
        this.router.navigate(['login']);
      }
    }else{
      alert("Elija los asientos");
    }
  }

  goBack(){
    this.location.back();
  }

}
