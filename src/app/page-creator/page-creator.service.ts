import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Modules} from "../../entity/modules";

@Injectable({
  providedIn: 'root'
})
export class PageCreatorService {

  private contentUrl = 'https://vladyslavomelchenko.eu/api/contentpage';

  constructor(private http: HttpClient) {
  }

  getModules(url: string): Observable<Modules[]> {
    return this.http.get<Modules[]>(`${this.contentUrl}?url=\/${url}`);
  }
}
