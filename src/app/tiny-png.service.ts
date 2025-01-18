import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TinyPngService {
  private corsProxy = 'https://cors-anywhere.herokuapp.com/';
  private tinifyApiUrl = 'https://api.tinify.com/shrink';
  private apiKey = 'YOUR_API_KEY'; // Replace with your Tinify API key

  constructor(private http: HttpClient) {}

  compressImage(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.apiKey}`,
    });

    // Using CORS proxy with the Tinify API
    return this.http.post(this.corsProxy + this.tinifyApiUrl, formData, {
      headers,
    });
  }
}
