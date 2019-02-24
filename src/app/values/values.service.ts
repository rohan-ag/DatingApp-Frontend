import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ValuesService {

  url = 'http://localhost:5000/api/values';
  constructor(private http: HttpClient) { }

  public getValues() {
    return this.http.get<any>(this.url);
  }
}
