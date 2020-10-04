import { Component, OnInit } from '@angular/core';
import { ContentService } from './content.service';
import { Modules } from './modules';
import { Observable } from "rxjs";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  modules: Modules[];

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.getModules();

  }

  getModules(): void {
    this.contentService.getModules()
      .subscribe(modules => this.modules = modules);;
  }

}
