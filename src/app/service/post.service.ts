import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ipost } from '../interface/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  API_URL_POST:string = "https://6m23c6-8080.csb.app/post"
  token = JSON.parse(sessionStorage.getItem('user') || '{}').accessToken
  constructor(private http: HttpClient) { }
  getAllPost(): Observable<any>{
    return this.http.get<any>(`${this.API_URL_POST}`)
  }
  getOnePost(id: number): Observable<any> {
    return this.http.get<any>(`${this.API_URL_POST}/${id}`)
  }
  deletePost(id: number): Observable<Ipost> {
    return this.http.delete<Ipost>(`${this.API_URL_POST}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
    })
  }
  addPost(post: Ipost): Observable<Ipost> {
    return this.http.post<Ipost>(`${this.API_URL_POST}`, post, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
    })
  }
  updatePost(post: Ipost): Observable<Ipost> {
    return this.http.put<Ipost>(`${this.API_URL_POST}/${post._id}`, post, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
    })
  }
}

