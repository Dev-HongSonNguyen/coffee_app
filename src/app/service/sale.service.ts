import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Isale } from '../interface/sale';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  API_URL_CATE:string = "http://localhost:8080/sale"
  token = JSON.parse(sessionStorage.getItem('user') || '{}').accessToken
  // constructor() { }
  constructor(private http: HttpClient) { }
  getAllSale(): Observable<any>{
    return this.http.get<any>(`${this.API_URL_CATE}`)
  }
  getOneSale(id: string): Observable<any>{
    return this.http.get<any>(`${this.API_URL_CATE}/${id}`)
  }
  deleteSale(id: string): Observable<Isale>{
    return this.http.delete<Isale>(`${this.API_URL_CATE}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
    })
  }
  addSale(sale: Isale): Observable<Isale>{
    return this.http.post<Isale>(`${this.API_URL_CATE}` , sale, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
    })
  }
  updateSale(sale: Isale): Observable<Isale>{
    return this.http.put<Isale>(`${this.API_URL_CATE}/${sale?._id}`, sale, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
    })
  }
}
