import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyTurnoverRoutingModule } from './property-turnover-routing.module';
import { PropertyTurnoverComponent } from './property-turnover.component';
import {
  InclusiveLeasingModule,
  ConfidenceGuaranteesModule,
  BlockContentModule,
  FreeRentalAnalysisModule,
  FreeQuoteModule,
  ContactFormTemplateModule,
  AreaServeModule,
  AdvertisementRentalAnalysisModule,
  AreaInfoModule,
} from 'src/app/shared';

@NgModule({
  declarations: [PropertyTurnoverComponent],
  imports: [
    CommonModule,
    PropertyTurnoverRoutingModule,
    InclusiveLeasingModule,
    ConfidenceGuaranteesModule,
    BlockContentModule,
    FreeRentalAnalysisModule,
    FreeQuoteModule,
    ContactFormTemplateModule,
    AreaServeModule,
    AdvertisementRentalAnalysisModule,
    AreaInfoModule,
  ],
})
export class PropertyTurnoverModule {}
