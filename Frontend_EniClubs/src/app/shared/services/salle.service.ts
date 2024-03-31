import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8081/api/salle/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'

})
export class SalleService {


  constructor(private http: HttpClient) {
  }

  getall(): Observable<any> {
    return this.http.get(API_URL + 'all');
  }
  findById(id): Observable<any> {
    return this.http.get(`${API_URL + 'find'}/${id}`);
  }
  add(salle): Observable<any> {
    return this.http.post(API_URL + 'add', {
      local: salle.local,
      name: salle.name,
    }, httpOptions);
  }
  update(id , salle): Observable<any> {
    return this.http.put(`${API_URL + 'update'}/${id}`, {
      local: salle.local,
      name: salle.name,
    }, httpOptions);
  }
  delete(id) {
    return this.http.delete(`${API_URL + 'delete'}/${id}`);

  }
}
