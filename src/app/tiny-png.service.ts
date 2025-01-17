import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TinyPngService {
  private apiUrl = 'https://api.tinify.com/shrink';
  private apiKey = 'RKjHC9792T2G5rcpDXfdc59Nn4TXlM39';

  constructor(private http: HttpClient) {}

  compressImage(file: File): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Basic ${btoa('api:' + this.apiKey)}`,
    });

    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(this.apiUrl, formData, {
      headers,
      responseType: 'json',
    });
  }
}
