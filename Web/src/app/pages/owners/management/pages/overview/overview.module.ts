import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';
import {
  InclusiveLeasingModule,
  ConfidenceGuaranteesModule,
  BlockContentModule,
  FreeRentalAnalysisModule,
  FreeQuoteModule,
  ContactFormTemplateModule,
  TooltipModule,
  AreaServeModule,
  AdvertisementRentalAnalysisModule,
  AreaInfoModule,
  AnimateOnScrollModule,
} from 'src/app/shared';

@NgModule({
  declarations: [OverviewComponent],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    InclusiveLeasingModule,
    ConfidenceGuaranteesModule,
    BlockContentModule,
    FreeRentalAnalysisModule,
    FreeQuoteModule,
    ContactFormTemplateModule,
    AreaServeModule,
    AdvertisementRentalAnalysisModule,
    AreaInfoModule,
    TooltipModule,
    AnimateOnScrollModule.forRoot(),
  ],
})
export class OverviewModule { }
