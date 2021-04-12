import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaInfoComponent } from './area-info.component';
import { IntersectionObserverModule } from 'src/app/shared/modules';



@NgModule({
  declarations: [AreaInfoComponent],
  imports: [
    CommonModule,
    IntersectionObserverModule
  ],
  exports: [AreaInfoComponent]
})
export class AreaInfoModule { }
