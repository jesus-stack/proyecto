import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutServiceService {
  API_URL = 'http://localhost:8080/checkout';

  constructor(private http : HttpClient) { }
  create(token:any):Observable<any>{
    return this.http.post(this.API_URL,token);
  }
}
