import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//avance 5
// import { environment } from '../../environments/environment';
import { ITipoAvion } from '../models/tipoAvion';

// Manual del profe. Mantenimientos:
/*const BLOG_API_ENDPOINT = `${environment.apiUrl}/posts`;

 const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};  */

@Injectable({
  providedIn: 'root'
})
export class TipoAvionService {

  URL = 'http://localhost:8080/tipoAvion'

  constructor(private http: HttpClient) {   }

  getTiposAviones(): Observable<any>{
    return this.http.get(this.URL);
  }

  // Manual del Proje. Mantienimientos
 /*  get(): Observable<any> {
    return this.http.get(BLOG_API_ENDPOINT, httpOptions);
  }
  create(post: any): Observable<any> {
    return this.http.post(BLOG_API_ENDPOINT, post);
  }
  delete(id: string): Observable<any> {
    return this.http.delete(`${BLOG_API_ENDPOINT}/${id}`);
  }

  getById(id: string): Observable<any> {
    return this.http.get(`${BLOG_API_ENDPOINT}/${id}`);
  }
  addComment(postId: string, comment: any): Observable<any> {
    return this.http.post(`${BLOG_API_ENDPOINT}/${postId}/comment`, comment);
  }

  deleteComment(postId: string, commentId: any): Observable<any> {
    return this.http.delete(
      `${BLOG_API_ENDPOINT}/${postId}/comments/${commentId}`
    );
  } */
  //////////////////////////////////////////////
  //avance 5 (segun el de vuelos)
  
  getTipoAvionById(id: String): Observable<any>{
    return this.http.get(`${this.URL}/${id}`);
  }

  createTipoAvion(tipoAvion: ITipoAvion): Observable<any>{
    return this.http.post(this.URL, tipoAvion);
  }

  editTipoAvion(id: String, tipoAvion: ITipoAvion): Observable<any>{
    return this.http.put(`${this.URL}/${id}`, tipoAvion);
  }

  deleteTipoAvion(id: String): Observable<any>{
    return this.http.delete(`${this.URL}/${id}`);
  }

}



