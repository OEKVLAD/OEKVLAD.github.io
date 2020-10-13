import { Component, OnInit } from '@angular/core';
import { ContentService } from './content.service';
import { Modules } from '../../entity/modules';
import { Observable } from "rxjs";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  modules: Modules[];
  private url: string;

  constructor(
    private contentService: ContentService,
    private route: ActivatedRoute,) {

    this.url = this.route.snapshot.paramMap.get('url');
  }

  ngOnInit(): void {
    console.log("test1");
    this.getModules();
    console.log(this.modules);
  }

  getModules(): void {
    this.contentService.getModules(this.url)
      .subscribe(modules => this.modules = modules);
  }

}
