import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountingRoutingModule } from './accounting-routing.module';
import { AccountingComponent } from './accounting.component';
import { InclusiveLeasingModule, ConfidenceGuaranteesModule, BlockContentModule, FreeRentalAnalysisModule, FreeQuoteModule, ContactFormTemplateModule, AreaServeModule, AdvertisementRentalAnalysisModule, AreaInfoModule } from 'src/app/shared';


@NgModule({
  declarations: [AccountingComponent],
  imports: [
    CommonModule,
    AccountingRoutingModule,
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
export class AccountingModule { }
