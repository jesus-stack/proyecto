import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipoAvionService {

  URL = 'http://localhost:8080/tipoAvion'

  constructor(private http: HttpClient) { 

  }

  getTiposAviones(){
    return this.http.get(this.URL);
  }

}
