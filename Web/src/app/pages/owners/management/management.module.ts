import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AnimateOnScrollModule, DumbsModule } from 'src/app/shared';

import { ManagementRoutingModule } from './management-routing.module';
import { ManagementComponent } from './management.component';
import { SrcollableControlModule } from 'src/app/shared/directives/scrollable-control.directive';

@NgModule({
  declarations: [
    ManagementComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ManagementRoutingModule,
    DumbsModule,
    SrcollableControlModule,
    AnimateOnScrollModule.forRoot(),
  ]
})
export class ManagementModule { }
