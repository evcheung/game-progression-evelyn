import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Response {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  languageId: number;
  averageNumberOfHoursPerDay: number;
}
@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:3000';

  getProfile() {
    return this.http.get<Response>(this.baseUrl + '/profile'); // typecasting, observables
  }
}
