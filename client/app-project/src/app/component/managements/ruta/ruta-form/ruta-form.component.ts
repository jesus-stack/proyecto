import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RutaService } from '../../../../services/ruta.service';
import { IRuta } from '../../../../models/ruta';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ruta-form',
  templateUrl: './ruta-form.component.html',
  styleUrls: ['./ruta-form.component.css']
})
export class RutaFormComponent implements OnInit {

  postForm = new FormGroup({
    identificador: new FormControl('', Validators.required),
    duracion: new FormControl('', Validators.required),
    origen: new FormControl('', Validators.required),
    destino: new FormControl('', Validators.required),
    porc_descuento: new FormControl('', Validators.required),
  });

  ruta: any = {};
  editMode = false;

  constructor(
    private rutaService: RutaService,
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
        this.rutaService.getRutaById(param.id).subscribe(data => {
          this.ruta = data;
          console.log(data);
          this.postForm.setValue({
            identificador: data.identificador,
            duracion: data.duracion,
            origen: data.origen,
            destino: data.destino,
            porc_descuento: data.porc_descuento,
          });
        });
      }
    }
    );
  }

  submitForm() {
    if (this.postForm.valid) {
      if(this.editMode){
        this.rutaService.editRuta(this.ruta._id,this.postForm.value).subscribe(
          response => {
            alert("Ruta editada correctamente");
            this.router.navigate(['dashboard/ruta/list']);
          },
          error => console.log(error)
        )
      }else{
        this.rutaService.createRuta(this.postForm.value).subscribe(
          response => {
            alert("Ruta guardado correctamente");
            this.router.navigate(['dashboard/ruta/list']);
          },
          error => console.log(error)
        )
      }
    } else {
      alert("Ha ocurrido un error");
    }
  }
}

