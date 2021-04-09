import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { DumbsModule, SrcollableControlModule } from 'src/app/shared';
import { DynamicFormComponent } from 'src/app/shared/components/dynamic-form/dynamic-form.component';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [AboutComponent, DynamicFormComponent,DynamicControlComponent],
  imports: [
    CommonModule,
    DumbsModule,
    HttpClientModule,
    AboutRoutingModule,
    ReactiveFormsModule,
    SrcollableControlModule
  ],
})
export class AboutModule {}
