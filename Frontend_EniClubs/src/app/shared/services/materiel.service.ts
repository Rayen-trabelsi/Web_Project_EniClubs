import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8081/api/materiel/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'

})
export class MaterielService {


  constructor(private http: HttpClient) {
  }

  getall(): Observable<any> {
    return this.http.get(API_URL + 'all');
  }
  findById(id): Observable<any> {
    return this.http.get(`${API_URL + 'find'}/${id}`);
  }
  add(materiel): Observable<any> {
    return this.http.post(API_URL + 'add', {
      name: materiel.name,
      quantite: materiel.quantite
    }, httpOptions);
  }
  update(id , materiel): Observable<any> {
    return this.http.put(`${API_URL + 'update'}/${id}`, {
      name: materiel.name,
      quantite: materiel.quantite
    }, httpOptions);
  }
  delete(id) {
    return this.http.delete(`${API_URL + 'delete'}/${id}`);

  }
}
