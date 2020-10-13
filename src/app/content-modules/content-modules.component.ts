import {Component, Input, OnInit} from '@angular/core';
import {Modules} from "../../entity/modules";

@Component({
  selector: 'app-content-modules',
  templateUrl: './content-modules.component.html',
  styleUrls: ['./content-modules.component.scss']
})
export class ContentModulesComponent implements OnInit {

  @Input() module: Modules;

  constructor() { }

  ngOnInit(): void { }

}
