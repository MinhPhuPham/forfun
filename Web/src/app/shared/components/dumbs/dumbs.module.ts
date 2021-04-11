import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';

const COMPONENTS = [
  BannerComponent,
  ScrollToTopComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule],
  exports: [...COMPONENTS],
})
export class DumbsModule {}
