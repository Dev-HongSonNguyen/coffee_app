import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  signup(user: any):Observable<any>{
    return this.http.post('https://6m23c6-8080.csb.app//signup', user)
  }
  signin(user: any):Observable<any>{
    return this.http.post('https://6m23c6-8080.csb.app//signin', user)
  }
  authenticated(){
    return JSON.parse(sessionStorage.getItem('user') || '{}')
  }
}
