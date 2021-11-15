import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TipoAvionService } from '../../../../services/tipo-avion.service';
import { RutaService } from '../../../../services/ruta.service';
import { VueloService } from '../../../../services/vuelo.service';
import { IVuelo } from '../../../../models/vuelo';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

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
  vuelo: any = {};
  editMode = false;

  constructor(
    private tipoAvionService: TipoAvionService,
    private rutaService: RutaService,
    private vueloService: VueloService,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getRutas();
    this.getTiposAviones();
    this.validarId();
  }

  validarId() {

    this.activeRoute.params.subscribe(param => {
      if (param.id) {
        this.editMode = true;
        this.vueloService.getVueloById(param.id).subscribe(data => {
          this.vuelo = data;
          this.postForm.setValue({
            ruta: data.ruta.origen + " - " + data.ruta.destino,
            tipoAvion: data.tipoAvion,
            dia: data.dia,
            hora: data.hora,
          });
        });
      }
    }
    );
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

  submitForm() {
    if (this.postForm.valid) {
      if(this.editMode){
        this.vueloService.editVuelo(this.vuelo._id,this.postForm.value).subscribe(
          response => {
            alert("Vuelo editado correctamente");
            this.router.navigate(['vuelo/list']);
          },
          error => console.log(error)
        )
      }else{
        this.vueloService.createVuelo(this.postForm.value).subscribe(
          response => {
            alert("Vuelo guardado correctamente");
            this.router.navigate(['vuelo/list']);
          },
          error => console.log(error)
        )
      }
    } else {
      alert("Ha ocurrido un error");
    }
  }
}
