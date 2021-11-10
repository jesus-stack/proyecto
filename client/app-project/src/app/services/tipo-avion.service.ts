import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoAvionService {

  URL = 'http://localhost:8080/tipoAvion'

  constructor(private http: HttpClient) { 

  }

  getTiposAviones(): Observable<any>{
    return this.http.get(this.URL);
  }

}
