import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeautyButtonsComponent } from './beauty-buttons/beauty-buttons.component';
import { BannerComponent } from './banner/banner.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';

@NgModule({
  declarations: [
    BeautyButtonsComponent,
    BannerComponent,
    ScrollToTopComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BeautyButtonsComponent,
    BannerComponent,
    ScrollToTopComponent
  ]
})
export class DumbsModule { }
