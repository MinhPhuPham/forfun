import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TentPlacementRoutingModule } from './tent-placement-routing.module';
import { TentPlacementComponent } from './tent-placement.component';
import {
  InclusiveLeasingModule,
  ConfidenceGuaranteesModule,
  BlockContentModule,
  FreeRentalAnalysisModule,
  FreeQuoteModule,
  ContactFormTemplateModule,
  AreaServeModule,
  AdvertisementRentalAnalysisModule,
} from 'src/app/shared';

@NgModule({
  declarations: [TentPlacementComponent],
  imports: [
    CommonModule,
    TentPlacementRoutingModule,
    InclusiveLeasingModule,
    ConfidenceGuaranteesModule,
    BlockContentModule,
    FreeRentalAnalysisModule,
    FreeQuoteModule,
    AreaServeModule,
    AdvertisementRentalAnalysisModule,
    ContactFormTemplateModule,
  ],
})
export class TentPlacementModule {}
