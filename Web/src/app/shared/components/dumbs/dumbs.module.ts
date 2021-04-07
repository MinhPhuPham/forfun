import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { BlockContentComponent } from './block-content/block-content.component';

const COMPONENTS = [
  BannerComponent,
  BlockContentComponent,
  ScrollToTopComponent,
  BlockContentComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule],
  exports: [...COMPONENTS],
})
export class DumbsModule {}
