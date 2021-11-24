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
update(id: string ,user : User):Observable<any>{
  return this.http.put(this.API_URL+'/'+id,user);
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
