import { Component, OnInit, Input } from '@angular/core';
import {ContentService} from "../content/content.service";
import { MainMenu } from './main-menu';
import { MainMenuService } from './main-menu.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  items: MainMenu[];

  constructor(private MainMenuService: MainMenuService,) {
              }

  ngOnInit(): void {
    this.getMenu();
  }

  getMenu(): void {
    this.MainMenuService.getMenu()
      .subscribe(items => this.items = items);;
  }

}
