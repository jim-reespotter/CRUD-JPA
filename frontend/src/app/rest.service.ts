import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Person {
  id: number;
  firstname: string;
  lastname: string;
}

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  getPersons(pageIndex: number, pageSize: number): Observable<Person[]> {
    return this.http.get<Person[]>("/api/person?start="+pageIndex+"&size="+pageSize);
  }

  getPersonCount():Observable<number> {
    return this.http.get<number>("/api/person/count");
  }
}
