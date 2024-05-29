import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sort, SortDirection } from '@angular/material/sort';
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

  getPersons(pageIndex: number, pageSize: number, filter: string, sort: Sort): Observable<Person[]> {
    
    return this.http.get<Person[]>("/api/person?start="+pageIndex+"&size="+pageSize
       +(filter != null ? "&filter="+filter : "")
       +(sort != null && sort.active != null ? "&sort="+sort.active : "")
       +(sort != null && sort.active != null && sort.direction == 'desc' ? "&desc" : "")
    );
  }

  getPersonCount(filter: string):Observable<number> {
    return this.http.get<number>("/api/person/count"
      +(filter != null && filter != "" ? "?filter="+filter : "")
    );
  }
}
