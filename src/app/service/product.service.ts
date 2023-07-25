import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { IProduct } from '../interface/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL_PRO: string = "https://6m23c6-8080.csb.app/products"
  token = JSON.parse(sessionStorage.getItem('user') || '{}').accessToken
  constructor(private http: HttpClient) {}
  getAllProduct():Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`${this.API_URL_PRO}`)
  }
  getProductById(id: string): Observable<any>{
    return this.http.get<any>(`${this.API_URL_PRO}/${id}`)
  }
  updateProduct(product: IProduct): Observable<IProduct>{
    return this.http.put<IProduct>(`${this.API_URL_PRO}/${product._id}`, product, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
    })
  }
  deleteProduct(id: string):Observable<IProduct>{
    return this.http.delete<IProduct>(`${this.API_URL_PRO}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
    })
  }
  addProduct(product: IProduct):Observable<IProduct>{
    return this.http.post<IProduct>(`${this.API_URL_PRO}`, product, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
    })
  }
}
