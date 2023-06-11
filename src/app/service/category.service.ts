import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../interface/categories';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  API_URL_CATE:string = "http://localhost:8080/categories"
  token = JSON.parse(sessionStorage.getItem('user') || '{}').accessToken
  // constructor() { }
  constructor(private http: HttpClient) { }
  getAllCategory(): Observable<any>{
    return this.http.get<any>(`${this.API_URL_CATE}`)
  }
  getOneCategory(id: string): Observable<any>{
    return this.http.get<any>(`${this.API_URL_CATE}/${id}`)
  }
  deleteCategory(id: string): Observable<ICategory>{
    return this.http.delete<ICategory>(`${this.API_URL_CATE}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
    })
  }
  addCategory(category: ICategory): Observable<ICategory>{
    return this.http.post<ICategory>(`${this.API_URL_CATE}` , category, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
    })
  }
  updateCategory(category: ICategory): Observable<ICategory>{
    return this.http.put<ICategory>(`${this.API_URL_CATE}/${category?._id}`, category, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
    })
  }
}
