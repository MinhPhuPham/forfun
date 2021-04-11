import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessSupportRoutingModule } from './access-support-routing.module';
import { AccessSupportComponent } from './access-support.component';
import { InclusiveLeasingModule, ConfidenceGuaranteesModule, BlockContentModule, FreeRentalAnalysisModule, FreeQuoteModule, ContactFormTemplateModule, AreaServeModule, AdvertisementRentalAnalysisModule, AreaInfoModule } from 'src/app/shared';
import { DetailAccessComponent } from './detail-access/detail-access.component';


@NgModule({
  declarations: [AccessSupportComponent, DetailAccessComponent],
  imports: [
    CommonModule,
    AccessSupportRoutingModule,
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
export class AccessSupportModule { }
