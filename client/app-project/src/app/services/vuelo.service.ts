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

  createVuelo(vuelo: IVuelo){
    return this.http.post(this.URL, vuelo);
  }
}
