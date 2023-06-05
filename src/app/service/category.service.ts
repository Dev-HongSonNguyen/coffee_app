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
  getAllCategory(): Observable<ICategory[]>{
    return this.http.get<ICategory[]>("http://localhost:8080/categories")
  }
}
