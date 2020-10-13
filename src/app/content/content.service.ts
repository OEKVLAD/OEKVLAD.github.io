import { Injectable } from '@angular/core';
import { Modules } from '../../entity/modules';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private contentUrl = 'https://vladyslavomelchenko.eu/api/contentpage';


  constructor(private http: HttpClient) {
  }

  getModules(url: string): Observable<Modules[]> {
     return this.http.get<Modules[]>(`${this.contentUrl}?url=\/${url}`);
  }
}
