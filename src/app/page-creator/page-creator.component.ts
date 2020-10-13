import { Component, OnInit } from '@angular/core';
import { PageCreatorService } from './page-creator.service';
import { Modules } from '../../entity/modules';
import { Observable } from "rxjs";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-creator',
  templateUrl: './page-creator.component.html',
  styleUrls: ['./page-creator.component.scss']
})
export class PageCreatorComponent implements OnInit {
  modules: Modules[];
  private url: string;

  constructor(
    private PageCreatorService: PageCreatorService,
    private route: ActivatedRoute,) {

    this.url = this.route.snapshot.paramMap.get('url');
  }

  ngOnInit(): void {
    this.getModules();

  }

  getModules(): void {
    this.PageCreatorService.getModules(this.url)
      .subscribe(modules => this.modules = modules);;
  }

}
