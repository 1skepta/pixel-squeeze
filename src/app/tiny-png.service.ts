import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TinyPngService {
  // Local CORS proxy URL
  private corsProxyUrl = 'http://localhost:8080/'; // Update to your local proxy
  private tinifyApiUrl = 'https://api.tinify.com/shrink';
  private apiKey = 'RKjHC9792T2G5rcpDXfdc59Nn4TXlM39'; // Replace with your actual Tinify API key

  constructor(private http: HttpClient) {}

  // Method to compress an image from file
  compressImage(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    // Basic authentication header for Tinify API
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa('api:' + this.apiKey), // Base64 encode "api:YOUR_API_KEY"
    });

    // Send the request via CORS proxy to bypass CORS issue
    return this.http.post(this.corsProxyUrl + this.tinifyApiUrl, formData, {
      headers: headers,
    });
  }

  // Method to compress an image from URL (Optional)
  compressImageFromUrl(imageUrl: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa('api:' + this.apiKey),
      'Content-Type': 'application/json',
    });

    const body = {
      source: { url: imageUrl },
    };

    // Send the request via CORS proxy to bypass CORS issue
    return this.http.post(this.corsProxyUrl + this.tinifyApiUrl, body, {
      headers,
    });
  }
}
