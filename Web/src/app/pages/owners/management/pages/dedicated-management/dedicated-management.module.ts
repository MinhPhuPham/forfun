import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DedicatedManagementRoutingModule } from './dedicated-management-routing.module';
import { DedicatedManagementComponent } from './dedicated-management.component';
import { InclusiveLeasingModule, ConfidenceGuaranteesModule, BlockContentModule, FreeRentalAnalysisModule, FreeQuoteModule, ContactFormTemplateModule, AreaServeModule, AdvertisementRentalAnalysisModule, AreaInfoModule } from 'src/app/shared';


@NgModule({
  declarations: [DedicatedManagementComponent],
  imports: [
    CommonModule,
    DedicatedManagementRoutingModule,
    InclusiveLeasingModule,
    ConfidenceGuaranteesModule,
    BlockContentModule,
    FreeRentalAnalysisModule,
    FreeQuoteModule,
    ContactFormTemplateModule,
    AreaServeModule,
    AdvertisementRentalAnalysisModule,
    AreaInfoModule
  ]
})
export class DedicatedManagementModule { }
