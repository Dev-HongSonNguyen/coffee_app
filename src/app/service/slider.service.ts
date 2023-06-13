import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Islider } from '../interface/slider';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SliderService {

  constructor(private http: HttpClient) { }
  API_URL_SLIDER = "http://localhost:8080/slider"
  token = JSON.parse(sessionStorage.getItem('user') || '{}').accessToken
  getAllSlider():Observable<Islider[]>{
    return this.http.get<Islider[]>(`${this.API_URL_SLIDER}`)
  }
  getOneSlider(id: string):Observable<Islider>{
    return this.http.get<Islider>(`${this.API_URL_SLIDER}/${id}`)
  }
  createSlider(slider: Islider):Observable<Islider>{
    return this.http.post<Islider>(`${this.API_URL_SLIDER}`, slider, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
    })
  }
  deleteSlider(id: string):Observable<Islider>{
    return this.http.delete<Islider>(`${this.API_URL_SLIDER}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
    } )
  }
  updateSlider(slider: Islider):Observable<Islider>{
    return this.http.put<Islider>(`${this.API_URL_SLIDER}/${slider._id}`, slider, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`)
    })
  }
}
