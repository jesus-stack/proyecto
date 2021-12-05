import { Component, OnInit } from '@angular/core';
import { TipoAvionService } from '../../../../services/tipo-avion.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tipoavion-list',
  templateUrl: './tipoavion-list.component.html',
  styleUrls: ['./tipoavion-list.component.css']
})
export class TipoavionListComponent implements OnInit {
  
  tipoavion: any;

  constructor(
    private tipoavionService: TipoAvionService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getTipoAvion();
  }

  getTipoAvion() {

    let result = false;

    this.tipoavionService.getTiposAviones().subscribe(
      response => {
        this.tipoavion = response;
       console.log(response); 
      },
      error => console.log(error)
    );
  }

  deleteTipoAvion(id: String) {
    this.tipoavionService.deleteTipoAvion(id).subscribe(
      response => {
        this.toastr.success('Tipo de avion eliminado correctamente');
        this.getTipoAvion();
      },
      error => console.log(error)
    );
  }

}
