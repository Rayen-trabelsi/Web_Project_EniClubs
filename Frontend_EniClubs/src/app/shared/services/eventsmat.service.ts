import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8081/api/eventMateriel/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'

})
export class EventsmatService {

  constructor(private http: HttpClient) {
  }

  getall(idevent): Observable<any> {
    return this.http.get(`${API_URL + 'all'}/${idevent}`);
  }
  findById(id): Observable<any> {
    return this.http.get(`${API_URL + 'find'}/${id}`);
  }
  add(eventmat): Observable<any> {
    return this.http.post(API_URL + 'add', {
      idevent: eventmat.idevent,

      idmateriel: eventmat.idmateriel,
      quantite: eventmat.quantite,
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
