import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent implements OnInit {
  constructor() { }

  @Input() itemLink: string;
  @Input() itemTitle: string;

  ngOnInit(): void {
  }

}
