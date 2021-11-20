import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IVuelo } from '../models/vuelo';

@Injectable({
  providedIn: 'root'
})
export class VueloService {

  URL = 'http://localhost:8080/vuelo'

  constructor(private http: HttpClient) {

  }

  getVuelos(): Observable<any>{
    return this.http.get(this.URL);
  }

  getVueloById(id: String): Observable<any>{
    return this.http.get(`${this.URL}/${id}`);
  }

  createVuelo(vuelo: IVuelo): Observable<any>{
    return this.http.post(this.URL, vuelo);
  }

  editVuelo(id: String, vuelo: IVuelo): Observable<any>{
    return this.http.put(`${this.URL}/${id}`, vuelo);
  }

  deleteVuelo(id: String): Observable<any>{
    return this.http.delete(`${this.URL}/${id}`);
  }
}
