import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

}
