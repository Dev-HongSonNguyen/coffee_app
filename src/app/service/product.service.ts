import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { IProduct } from '../interface/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}
  getAllProduct():Observable<IProduct[]>{
    return this.http.get<IProduct[]>("http://localhost:8080/products")
  }
}
