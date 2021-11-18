import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TipoAvionService } from '../../../../services/tipo-avion.service';
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
    cant_AsientosFila: new FormControl('', Validators.required),
    cant_Filas: new FormControl('', Validators.required)
  });

  tiposAviones: any = {};
  editMode = false;

  constructor(
    private tipoavionservice: TipoAvionService,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.validarId();
  }

  validarId() {

    this.activeRoute.params.subscribe(param => {
      if (param.id) {
        this.editMode = true;
        this.tipoavionservice.getTipoAvionById(param.id).subscribe(data => {
          this.tiposAviones = data;
          console.log(data.cant_Filas);
          this.postForm.setValue({
            identificador: data.identificador,
            modelo: data.modelo,
            marca: data.marca,
            anio: data.anio,
            cant_AsientosFila: data.cant_AsientosFila,
            cant_Filas: data.cant_Filas
          });
        },
        error => console.log(error, "fff"));
      }
    }
    );
  }

  submitForm() {
    if (this.postForm.valid) {
      if (this.editMode) {
        this.tipoavionservice.editTipoAvion(this.tiposAviones._id, this.postForm.value).subscribe(
          response => {
            alert("Tipo avion editado correctamente");
            this.router.navigate(['/dashboard/management/tipoavion/list']);
          },
          error => console.log(error)
        )
      } else {
        console.log(this.postForm.value);
        this.tipoavionservice.createTipoAvion(this.postForm.value).subscribe(
          response => {
            alert("Tipo avion guardado correctamente");
            this.router.navigate(['/dashboard/management/tipoavion/list']);
          },
          error => console.log(error)
        )
      }
    } else {
      alert("Ha ocurrido un error");
    }
  }
}
