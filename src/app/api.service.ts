import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/testEndpoint'; // Your API endpoint

  constructor(private http: HttpClient) { }

  // Method to hit the API with POST request
  postTestEndpoint(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
