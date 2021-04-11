import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DumbsModule, ScrollToDivModule } from 'src/app/shared';

import { ManagementRoutingModule } from './management-routing.module';
import { ManagementComponent } from './management.component';
import { SrcollableControlModule } from 'src/app/shared/directives/scrollable-control.directive';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ManagementComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ManagementRoutingModule,
    DumbsModule,
    SrcollableControlModule,
    ScrollToDivModule
  ]
})
export class ManagementModule { }
