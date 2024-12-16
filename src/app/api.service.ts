import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private apiUrl = '/serving-endpoints/databricks-meta-llama-3-3-70b-instruct/invocations'

  private body = {
    "messages": [
      {
        "role": "user",
        "content": "Write a haiku about CORS errors in APIs."
      }
    ],
    "max_tokens": 100,
    "temperature": 0.9
  }

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + environment.databricks_token
  });
  private options = {
    headers: this.headers
  }

  makeApiCall(): Observable<any> {
    return this.http.post(this.apiUrl, this.body, this.options);
  }

}