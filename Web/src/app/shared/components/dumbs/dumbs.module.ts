import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';

@NgModule({
  declarations: [
    BannerComponent,
    ScrollToTopComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BannerComponent,
    ScrollToTopComponent
  ]
})
export class DumbsModule { }
