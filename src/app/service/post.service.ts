import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ipost } from '../interface/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  getAllPost(): Observable<any>{
    return this.http.get<any>("http://localhost:8080/post")
  }
  getOnePost(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/post/${id}`)
  }
  deletePost(id: number): Observable<Ipost> {
    return this.http.delete<Ipost>(`http://localhost:8080/post/${id}`)
  }
  addPost(post: Ipost): Observable<Ipost> {
    return this.http.post<Ipost>(`http://localhost:8080/post`, post)
  }
  updatePost(post: Ipost): Observable<Ipost> {
    return this.http.put<Ipost>(`http://localhost:8080/post/${post._id}`, post)
  }
}
