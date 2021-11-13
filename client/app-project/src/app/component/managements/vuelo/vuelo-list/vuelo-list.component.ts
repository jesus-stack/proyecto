import { Component, OnInit } from '@angular/core';
import { VueloService } from '../../../../services/vuelo.service';

@Component({
  selector: 'app-vuelo-list',
  templateUrl: './vuelo-list.component.html',
  styleUrls: ['./vuelo-list.component.css']
})
export class VueloListComponent implements OnInit {

  vuelos = <any>[];

  constructor(
    private vueloService: VueloService
  ) { }

  ngOnInit(): void {
    this.getVuelos();
  }

  getVuelos() {
    this.vueloService.getVuelos().subscribe(
      response => {
        this.vuelos = response;
      },
      error => console.log(error)
    );
  }

}
