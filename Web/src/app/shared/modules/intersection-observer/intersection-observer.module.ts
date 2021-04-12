import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntersectionObserverDirective } from './intersection-observer.directive';
import { IntersectionObserveeDirective } from './intersection-observee.directive';
import { LazyImageIntersectionDirective } from './lazy-image-intersection.directive';

@NgModule({
  declarations: [IntersectionObserverDirective, IntersectionObserveeDirective, LazyImageIntersectionDirective],
  imports: [CommonModule],
  exports: [IntersectionObserverDirective, IntersectionObserveeDirective, LazyImageIntersectionDirective],
})
export class IntersectionObserverModule {}
