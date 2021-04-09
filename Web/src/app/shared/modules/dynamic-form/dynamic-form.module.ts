import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicControlComponent } from './dynamic-control.component';
import { DynamicFormComponent } from './dynamic-form.component';

@NgModule({
  declarations: [DynamicControlComponent, DynamicFormComponent],
  imports: [CommonModule],
  exports: [DynamicControlComponent, DynamicFormComponent],
})
export class DynamicFormModule {}
