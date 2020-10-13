import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { MainMenu } from './main-menu';

@Injectable({
  providedIn: 'root'
})
export class MainMenuService {

  private contentUrl = 'https://vladyslavomelchenko.eu/api/menu/main';

  constructor(private http: HttpClient) { }

  getMenu(): Observable<MainMenu[]> {
    return this.http.get<MainMenu[]>(this.contentUrl);
  }
}
