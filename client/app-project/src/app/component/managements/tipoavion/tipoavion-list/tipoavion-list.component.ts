import { Component, OnInit } from '@angular/core';
import { TipoAvionService } from '../../../../services/tipo-avion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipoavion-list',
  templateUrl: './tipoavion-list.component.html',
  styleUrls: ['./tipoavion-list.component.css']
})
export class TipoavionListComponent implements OnInit {


  /* constructor(private tipoavionService: TipoAvionService) {}

  posts: any = [];
//creo que aqui faltaaa!
  ngOnInit(): void {
    this.tipoavionService.getTiposAviones().subscribe((posts) => {
      this.posts = posts;
    });
  } */
  tipoavion: any;

  constructor(
    private tipoavionService: TipoAvionService,
    private router: Router
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
        alert("Eliminado Correctamente");
        this.getTipoAvion();
      },
      error => console.log(error)
    );
  }

}
