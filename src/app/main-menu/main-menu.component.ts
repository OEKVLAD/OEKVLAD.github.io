import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  items: any;

  constructor() {
    this.items = [
      {
        "routeLink":"/",
        "tittle":"HOME"
      },
      {
        "routeLink":"/dashboard",
        "tittle":"DASHBOARD"
      },
      {
        "routeLink":"/dashboard",
        "tittle":"RESUME"
      },
      {
        "routeLink":"/dashboard",
        "tittle":"PROJECTS"
      },
      {
        "routeLink":"/pages",
        "tittle":"PORTFOLIO"
      },
      {
        "routeLink":"/dashboard",
        "tittle":"CONTACT"
      },
    ];
  }

  ngOnInit(): void {
  }

}
