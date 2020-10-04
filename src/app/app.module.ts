import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ContentModuleModule } from './content_module/content-module.module';

import { AppComponent } from './app.component';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './dashboard/dashboard.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuItemsComponent,
    MainMenuComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule,
    HttpClientModule,
    ContentModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
