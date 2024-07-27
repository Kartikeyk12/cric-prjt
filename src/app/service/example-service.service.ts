import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../components/ngrx-store/student.model';

@Injectable({
  providedIn: 'root'
})
export class ExampleServiceService {
  private jsonData = 'assets/data.json';

  constructor(private http: HttpClient) { }
  getData(): Observable<any> {
    return this.http.get(this.jsonData);
  }
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.jsonData);
  }
}
