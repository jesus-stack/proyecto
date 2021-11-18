import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../../../../services/reserva.service';

@Component({
  selector: 'app-reserva-list',
  templateUrl: './reserva-list.component.html',
  styleUrls: ['./reserva-list.component.css']
})
export class ReservaListComponent implements OnInit {

  reservas: any = [];

  constructor(
    private reservaService: ReservaService
  ) { }

  ngOnInit(): void {
    this.getReservas();
  }

  getReservas() {
    let result = false;
    this.reservaService.getReservas().subscribe(
      response => {
        this.reservas = response;
        result = this.reservas.filter((x: any) => x.habilitado === true);
        this.reservas = result;
      },
      error => console.log(error)
    );
  }

  deleteReserva(id: String) {
    this.reservaService.deleteReserva(id).subscribe(
      response => {
        this.getReservas();
        alert("Eliminado Correctamente");
      },
      error => console.log(error)
    );
  }

}
