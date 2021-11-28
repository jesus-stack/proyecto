import { Injectable } from '@angular/core';
import { Compra } from '../models/compra';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  API_URL = 'http://localhost:8080/compra';

  constructor(private http : HttpClient) { }
  create(compra : Compra):Observable<any>{
    return this.http.post(this.API_URL,compra);
  }

  update(id: string ,compra : Compra):Observable<any>{
    return this.http.put(this.API_URL+'/'+id,compra);
  }
  delete(id: string ):Observable<any>{
    return this.http.delete(this.API_URL+'/'+id);
  }
  getById(id: string ):Observable<any>{
    return this.http.get(this.API_URL+'/'+id);
  }
  get():Observable<any>{
    return this.http.get(this.API_URL);
  }
}
