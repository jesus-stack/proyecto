import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  URL = 'http://localhost:8080/reserva'

  constructor(private http: HttpClient) {

  }

  getReservas(): Observable<any>{
    return this.http.get(this.URL);
  }

  getReservaById(id: String): Observable<any>{
    return this.http.get(`${this.URL}/${id}`);
  }

  createReserva(reserva: any): Observable<any>{
    return this.http.post(this.URL, reserva);
  }

  editReserva(id: String, reserva: any): Observable<any>{
    return this.http.put(`${this.URL}/${id}`, reserva);
  }

  deleteReserva(id: String): Observable<any>{
    return this.http.delete(`${this.URL}/${id}`);
  }
}
