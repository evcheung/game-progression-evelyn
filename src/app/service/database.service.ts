import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }

  baseUrl = 'localhost:3000';

  getProfile() {
    return this.http.get(this.baseUrl + '/profiles');
  }
}
