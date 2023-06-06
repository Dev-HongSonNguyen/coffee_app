import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../interface/categories';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  // constructor() { }
  constructor(private http: HttpClient) { }
  getAllCategory(): Observable<any>{
    return this.http.get<any>("http://localhost:8080/categories")
  }
  deleteCategory(id: string): Observable<ICategory>{
    return this.http.delete<ICategory>(`http://localhost:8080/categories/${id}`)
  }
  addCategory(category: ICategory): Observable<ICategory>{
    return this.http.post<ICategory>(`http://localhost:8080/categories` , category)
  }
  updateCategory(category: ICategory): Observable<ICategory>{
    return this.http.put<ICategory>(`http://localhost:8080/categories/${category?._id}`, category)
  }
}
