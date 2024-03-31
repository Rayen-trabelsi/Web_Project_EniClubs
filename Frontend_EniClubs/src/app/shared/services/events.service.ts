import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8081/api/events/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'

})
export class EventService {

  constructor(private http: HttpClient) {
  }

  getallEnattente(): Observable<any> {
    return this.http.get(API_URL + 'allA');
  }
  getallR(): Observable<any> {
    return this.http.get(API_URL + 'allr');
  }
  getallNV(username): Observable<any> {
    return this.http.get(`${API_URL + 'allnv'}/${username}`);  }


  findById(id): Observable<any> {
    return this.http.get(`${API_URL + 'find'}/${id}`);
  }
  add(event): Observable<any> {
    return this.http.post(API_URL + 'add', {
      name: event.name,

      description: event.description,
     date: event.date,
      heure : event.heure,
      idsalle: event.idsalle,
      nameClubs: event.nameClubs,
      nameMateriels: event.nameMateriels
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
  sendAcceptation(nameuser, idevent): Observable<any> {
    return this.http.put(`${API_URL + 'sendA'}/${nameuser}/${idevent}`, {});

  }
  sendRefus(nameuser, idevent): Observable<any> {
    return this.http.put(`${API_URL + 'sendR'}/${nameuser}/${idevent}`, {});

  }
}
