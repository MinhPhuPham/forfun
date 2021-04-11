import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaInfoComponent } from './area-info.component';



@NgModule({
  declarations: [AreaInfoComponent],
  imports: [
    CommonModule
  ],
  exports: [AreaInfoComponent]
})
export class AreaInfoModule { }
