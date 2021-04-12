import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormTemplateComponent } from './contact-form-template.component';

@NgModule({
  declarations: [ContactFormTemplateComponent],
  imports: [
    CommonModule
  ],
  exports: [ContactFormTemplateComponent]
})
export class ContactFormTemplateModule { }
