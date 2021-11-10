import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

API_URL = 'http://localhost:8080/user'

  constructor(private http : HttpClient) { }

//Create new user
addUser(user : User):Observable<any>{
  return this.http.post(this.API_URL+'/signup',user);
}

signin(user : User):Observable<any>{
  return this.http.post(this.API_URL+'/signin',user);
}

}
