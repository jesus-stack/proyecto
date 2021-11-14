import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TipoAvionService } from '../../../../services/tipo-avion.service';
import { RutaService } from '../../../../services/ruta.service';
import { VueloService } from '../../../../services/vuelo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vuelo-form',
  templateUrl: './vuelo-form.component.html',
  styleUrls: ['./vuelo-form.component.css']
})
export class VueloFormComponent implements OnInit {

  postForm = new FormGroup({
    ruta: new FormControl(this.getRutas, Validators.required),
    tipoAvion: new FormControl(this.getTiposAviones, Validators.required),
    dia: new FormControl('', Validators.required),
    hora: new FormControl('', Validators.required),
  });

  tiposAviones = <any>[];
  rutas = <any>[];

  constructor(
    private tipoAvionService: TipoAvionService,
    private rutaService: RutaService,
    private vueloService: VueloService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getRutas();
    this.getTiposAviones();
  }

  getTiposAviones() {
    this.tipoAvionService.getTiposAviones().subscribe(
      response => {
        this.tiposAviones = response;
      },
      error => console.log(error)
    );
  }

  getRutas() {
    this.rutaService.getRutas().subscribe(
      response => {
        this.rutas = response;
      },
      error => console.log(error)
    );
  }

  submitForm(){
    if(this.postForm.valid){
      this.vueloService.createVuelo(this.postForm.value).subscribe(
        response => {
          alert("Vuelo Guardado");
          this.router.navigate(['vuelo/list']);
        },
        error => console.log(error)
      )
    }else{
      alert("Ha ocurrido un error");
    }
  }
}
