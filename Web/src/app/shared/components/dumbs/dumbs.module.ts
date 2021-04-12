import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { IntersectionObserverModule } from '../../modules';

const COMPONENTS = [
  BannerComponent,
  ScrollToTopComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, IntersectionObserverModule],
  exports: [...COMPONENTS],
})
export class DumbsModule {}
