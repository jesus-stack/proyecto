import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BusquedaService } from 'src/app/services/busqueda.service';
import { RutaService } from 'src/app/services/ruta.service';
import { VueloService } from 'src/app/services/vuelo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchForm = new FormGroup({
    origen: new FormControl('', Validators.required),
    destino: new FormControl('', Validators.required),
    fechaIda: new FormControl('', Validators.required),
    fechaVuelta: new FormControl(''),
    radioGroup: new FormControl('', Validators.required),
  });

  vuelosFiltrados: any;
  vuelosFiltradosVuelta: any;
  vuelosDescuento: any = [];

  constructor(
    private vueloService: VueloService,
    private rutaService: RutaService,
    private busquedaService: BusquedaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.busquedaService.setBusqueda(null);
    this.busquedaService.cargarScript();
    this.cargarVuelosDescuento();
  }

  submitSearchForm() {

    let valorRadio = this.searchForm.value.radioGroup;

    if (valorRadio === 'ida') {

      if (this.searchForm.valid) {
        this.vueloService.getVuelos().subscribe(
          response => {
            this.vuelosFiltrados = response;
            this.vuelosFiltrados = this.vuelosFiltrados.filter((x: any) => {
              return x.ruta.origen == this.searchForm.value.origen
                && x.ruta.destino == this.searchForm.value.destino
                && x.dia == this.searchForm.value.fechaIda;
            });
            this.busquedaService.setBusqueda(this.vuelosFiltrados);
            this.router.navigate(['/results']);
          },
          error => {
            console.log(error);
          }
        );
      }
    } else if (valorRadio === 'idaVuelta' && this.searchForm.value.fechaVuelta !== '') {
      if (this.searchForm.valid) {
        this.vueloService.getVuelos().subscribe(
          response => {
            this.vuelosFiltrados = response;
            this.vuelosFiltradosVuelta = response;

            this.vuelosFiltrados = this.vuelosFiltrados.filter((x: any) => {
              return x.ruta.origen == this.searchForm.value.origen
                && x.ruta.destino == this.searchForm.value.destino
                && x.dia == this.searchForm.value.fechaIda;
            });

            this.vuelosFiltradosVuelta = this.vuelosFiltradosVuelta.filter((x: any) => {
              return x.ruta.destino == this.searchForm.value.origen
                && x.dia == this.searchForm.value.fechaVuelta;
            });

            if (this.vuelosFiltradosVuelta.length > 0) {
              this.vuelosFiltrados.push({ "vuelta": "Vuelos de vuelta" });
            }

            for (let i = 0; i < this.vuelosFiltradosVuelta.length; i++) {
              this.vuelosFiltrados.push(this.vuelosFiltradosVuelta[i]);
            }
            this.busquedaService.setBusqueda(this.vuelosFiltrados);
            this.router.navigate(['/results']);
          },
          error => {
            console.log(error);
          }
        );
      }
    }
  }
  
  cargarVuelosDescuento(){

    this.rutaService.getRutas().subscribe(response => {
      let vuelos = response;
      this.vuelosDescuento = vuelos.filter((x:any)=>{
        return x.porc_descuento > 0
      });
      console.log(this.vuelosDescuento);
    });
  }
}
