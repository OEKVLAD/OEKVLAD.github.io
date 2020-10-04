import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageTextComponent } from './image-text/image-text.component';

@NgModule({
  declarations: [
    ImageTextComponent
  ],
  exports: [
    ImageTextComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContentModuleModule { }
