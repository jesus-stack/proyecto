import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TipoAvionService } from '../../../../services/tipo-avion.service';
/* import { RutaService } from '../../../../services/ruta.service';
import { VueloService } from '../../../../services/vuelo.service';*/
import { ITipoAvion } from '../../../../models/tipoAvion';
import { Router } from '@angular/router'; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tipoavion-form',
  templateUrl: './tipoavion-form.component.html',
  styleUrls: ['./tipoavion-form.component.css']
})
export class TipoavionFormComponent implements OnInit {

  postForm = new FormGroup({
    identificador: new FormControl('', [Validators.required, Validators.minLength(3)]),
    modelo: new FormControl('', Validators.required),
    marca: new FormControl('', Validators.required),
    anio: new FormControl('', Validators.required),
    cant_pasajeros: new FormControl('', Validators.required),
    cant_filas: new FormControl('', Validators.required),
    cant_asientosfila: new FormControl('', Validators.required),
  });

  tiposAviones: any = {};
  editMode = false; 

  constructor(
    private tipoavionservice: TipoAvionService,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    /* this.getRutas();
    this.getTiposAviones(); */
    this.validarId();
  }

  validarId() {

    this.activeRoute.params.subscribe(param => {
      if (param.id) {
        this.editMode = true;
        this.tipoavionservice.getTipoAvionById(param.id).subscribe(data => {
          this.tiposAviones = data;
          this.postForm.setValue({
            identificador: data.identificador,
            modelo: data.modelo,
            marca: data.marca,
            anio: data.anio,
            cant_pasajeros: data.cant_pasajeros,
            cant_filas: data.cant_filas,
            cant_asientosfila: data.cant_asientosfila,
          });
        });
      }
    }
    );
  }

  submitForm() {
    console.log(this.postForm.valid, 'isValid')
    console.log(this.postForm, 'postform')
    if (this.postForm.valid) {
      if(this.editMode){
        this.tipoavionservice.editTipoAvion(this.tiposAviones._id,this.postForm.value).subscribe(
          response => {
            alert("Tipo avion editado correctamente");
            this.router.navigate(['tipoavion/list']);
          },
          error => console.log(error)
        )
      }else{
        console.log("test");
        this.tipoavionservice.createTipoAvion(this.postForm.value).subscribe(
          response => {
            alert("Tipo avion guardado correctamente");
            this.router.navigate(['tipoavion/list']);
          },
          error => console.log(error)
        )
      }
    } else {
      alert("Ha ocurrido un error");
    }
  }
 
}
