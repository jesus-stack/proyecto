import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRuta } from '../models/ruta';

@Injectable({
  providedIn: 'root'
})
export class RutaService {

  URL = 'http://localhost:8080/ruta'

  constructor(private http: HttpClient) {

  }

  getRutas(): Observable<any>{
    return this.http.get(this.URL);
  }

  getRutaById(id: String): Observable<any>{
    return this.http.get(`${this.URL}/${id}`);
  }

  createRuta(ruta: IRuta): Observable<any>{
    return this.http.post(this.URL, ruta);
  }

  editRuta(id: String, ruta: IRuta): Observable<any>{
    return this.http.put(`${this.URL}/${id}`, ruta);
  }

  deleteRuta(id: String): Observable<any>{
    return this.http.delete(`${this.URL}/${id}`);
  }
}

