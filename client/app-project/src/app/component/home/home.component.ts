import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BusquedaService } from 'src/app/services/busqueda.service';
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
    fechaVuelta: new FormControl('', Validators.required),
    radioGroup: new FormControl('', Validators.required),
  });

  vuelosFiltrados: any;

  constructor(
    private vueloService: VueloService,
    private busquedaService: BusquedaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.busquedaService.setBusqueda([]);
  }

  submitSearchForm() {
    if (true) {
      this.vueloService.getVuelos().subscribe(
        response => {
          this.vuelosFiltrados = response;
          this.vuelosFiltrados = this.vuelosFiltrados.filter((x:any) => {
            return x.ruta.origen == this.searchForm.value.origen 
            && x.ruta.destino == this.searchForm.value.destino 
            && x.dia == this.searchForm.value.fechaIda;
          });
          this.busquedaService.setBusqueda(this.vuelosFiltrados);
          this.router.navigate(['/results']);
        },
        error => {
          console.log(error);
        });
    } else {
      alert("Formulario Invalido");
    }
  }

}
