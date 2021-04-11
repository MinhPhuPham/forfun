import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplianceInspectionsRoutingModule } from './compliance-inspections-routing.module';
import { ComplianceInspectionsComponent } from './compliance-inspections.component';
import { InclusiveLeasingModule, ConfidenceGuaranteesModule, BlockContentModule, FreeRentalAnalysisModule, FreeQuoteModule, ContactFormTemplateModule, AreaServeModule, AdvertisementRentalAnalysisModule, AreaInfoModule } from 'src/app/shared';


@NgModule({
  declarations: [ComplianceInspectionsComponent],
  imports: [
    CommonModule,
    ComplianceInspectionsRoutingModule,
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
export class ComplianceInspectionsModule { }
