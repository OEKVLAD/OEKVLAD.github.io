import { Injectable } from '@angular/core';
import { Modules } from './modules';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private contentUrl = 'http://vladyslavomelchenko.eu/api/contentpage/';


  constructor(
    private http: HttpClient,
   ) {
  }

  getModules(): Observable<Modules[]> {
     return this.http.get<Modules[]>(this.contentUrl);
  }
}
