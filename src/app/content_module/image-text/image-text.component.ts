import {Component, Input, OnInit} from '@angular/core';
import {Modules} from "../../content/modules";

@Component({
  selector: 'app-content-image-text',
  templateUrl: './image-text.component.html',
  styleUrls: ['./image-text.component.scss']
})
export class ImageTextComponent implements OnInit {

  @Input() module: Modules;

  constructor() { }

  ngOnInit(): void {
  }

}
