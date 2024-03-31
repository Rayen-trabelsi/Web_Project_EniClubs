import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/concour/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'

})
export class GestionConcoursServiceService {
  API_URLl = 'http://localhost:8080/api/concour/';

  constructor(private http: HttpClient) {
  }

  getall(): Observable<any> {
    return this.http.get(API_URL + 'all');
  }
  getValide(): Observable<any> {
    return this.http.get(API_URL + 'allValide');
  }
  findById(id): Observable<any> {
    return this.http.get(`${this.API_URLl + 'find'}/${id}`);
  }
  add(concour): Observable<any> {
    return this.http.post(API_URL + 'add', {
      name: concour.name,
      datedebut: concour.datedebut,
      datefin: concour.datefin,
      iduser : concour.iduser,
    }, httpOptions);
  }
  update(id , concour): Observable<any> {
    return this.http.put(`${API_URL + 'update'}/${id}`, {
      name: concour.name,
      datedebut: concour.datedebut,
      datefin: concour.datefin,
      iduser : concour.iduser,
    }, httpOptions);
  }
  valider(id) {
    // @ts-ignore
    return this.http.put(`${this.API_URLl + 'validation'}/${id}`);

  }


  delete(id) {
    return this.http.delete(`${this.API_URLl + 'delete'}/${id}`);

  }
}
