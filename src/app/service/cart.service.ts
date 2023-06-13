import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartapiService {
  cartDataList: any = [];
  productList = new BehaviorSubject<any>([]);
  API_URL_CART: string = "http://localhost:8080/cart"
  // token = JSON.parse(sessionStorage.getItem('user') || '{}').accessToken
  constructor(private http: HttpClient) { }
  getAllCart() {
    return this.http.get(`${this.API_URL_CART}`)
  }
  getOneCart(id: any) {
    return this.http.get(`${this.API_URL_CART}/${id}`)
  }
  createCart(product: any) {
    return this.http.post(`${this.API_URL_CART}`, product)
  }
  updateCart(cart: any, idx: any) {
    return this.http.put<any>(`${this.API_URL_CART}/${idx}`, cart)
  }
  deleteCart(id :any) {
    return this.http.delete<any>(`${this.API_URL_CART}/${id}`)
  }
}
