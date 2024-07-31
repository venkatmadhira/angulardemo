import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = 'http://localhost:8080/api/register';

  constructor(private http: HttpClient) { }

  register(user: any): Observable<any> {
    const httpOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
      'Accept':'application/json'
      })
      
    }
    console.log('data in service'+JSON.stringify(user))
    return this.http.post(this.apiUrl, user,httpOptions);
  }
}
