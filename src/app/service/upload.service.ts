import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UploadService {
  
  constructor(private http: HttpClient) {}
  uploadImage(files: any[]): Observable<any> {
    const formData = new FormData();
    for (let file of files) {
      formData.append('images', file);
    }
    return this.http.post<any>('http://localhost:8080/images', formData);
  }
  deleteImage(publicId: string): Observable<any> {
    return this.http.delete(`http://localhost:8080/images/${publicId}`);
  }
}
