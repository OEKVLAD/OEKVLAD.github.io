import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { QuillModule } from 'ngx-quill'
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './dashboard/dashboard.module';

import { AppComponent } from './app.component';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

import { ContentComponent } from './content/content.component';
import { PageCreatorComponent } from './page-creator/page-creator.component';
import { PageCreatorListComponent } from './page-creator-list/page-creator-list.component';
import { PageCreatorListItemsComponent } from './page-creator-list-items/page-creator-list-items.component';
import { ContentModulesComponent } from './content-modules/content-modules.component';
import { PageCreatorContentModuleComponent } from './page-creator-content-module/page-creator-content-module.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuItemsComponent,
    MainMenuComponent,
    ContentComponent,
    PageCreatorComponent,
    PageCreatorListComponent,
    PageCreatorListItemsComponent,
    ContentModulesComponent,
    PageCreatorContentModuleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule,
    HttpClientModule,
    FormsModule,
    QuillModule.forRoot({
      modules: {
        syntax: true,
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
          ['blockquote', 'code-block'],

          [{'header': 1}, {'header': 2}],               // custom button values
          [{'list': 'ordered'}, {'list': 'bullet'}],
          [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
          [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
          [{'direction': 'rtl'}],                         // text direction

          [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
          [{'header': [1, 2, 3, 4, 5, 6, false]}],

          [{'color': []}, {'background': []}],          // dropdown with defaults from theme
          [{'font': []}],
          [{'align': []}],

          ['clean'],                                         // remove formatting button

          ['link', 'image', 'video']                         // link and image, video
        ]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
