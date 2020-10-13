import {Component, Input, OnInit} from '@angular/core';
import {Modules} from "../../entity/modules";

@Component({
  selector: 'app-page-creator-content-module',
  templateUrl: './page-creator-content-module.component.html',
  styleUrls: ['./page-creator-content-module.component.scss']
})
export class PageCreatorContentModuleComponent implements OnInit {

  @Input() module: Modules;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeEditor(): void {
  console.log("test")
  }

}
