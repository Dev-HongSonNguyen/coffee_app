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
    return this.http.post<any>('https://6m23c6-8080.csb.app/images', formData);
  }
  deleteImage(publicId: string): Observable<any> {
    return this.http.delete(`https://6m23c6-8080.csb.app/images/${publicId}`);
  }
}
