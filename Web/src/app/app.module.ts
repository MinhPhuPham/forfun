import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { ErrorComponent } from './pages/error/error.component';
import { LayoutModule } from './layout/layout.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, ErrorComponent],
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    ScullyLibModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
