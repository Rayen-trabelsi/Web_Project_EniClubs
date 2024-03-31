import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8081/api/clubs/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'

})
export class ClubsService {

  constructor(private http: HttpClient) {
  }

  getall(): Observable<any> {
    return this.http.get(API_URL + 'all');
  }

  getallresp(): Observable<any> {
    return this.http.get(API_URL + 'allr');
  }
  findById(id): Observable<any> {
    return this.http.get(`${API_URL + 'find'}/${id}`);
  }
  add(club): Observable<any> {
    return this.http.post(API_URL + 'add', {
      name: club.name,

     nbmembers: club.nbmembers,
     idresp: club.idresp,
    }, httpOptions);
  }
  update(id , club): Observable<any> {
    return this.http.put(`${API_URL + 'update'}/${id}`, {
      name: club.name,

      nbmembers: club.nbmembers,
      idresp: club.idresp,
    }, httpOptions);
  }
  delete(id) {
    return this.http.delete(`${API_URL + 'delete'}/${id}`);

  }
}
