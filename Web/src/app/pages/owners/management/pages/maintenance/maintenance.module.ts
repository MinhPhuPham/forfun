import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { MaintenanceComponent } from './maintenance.component';
import { InclusiveLeasingModule, ConfidenceGuaranteesModule, BlockContentModule, FreeRentalAnalysisModule, FreeQuoteModule, ContactFormTemplateModule, AreaServeModule, AdvertisementRentalAnalysisModule, AreaInfoModule } from 'src/app/shared';


@NgModule({
  declarations: [MaintenanceComponent],
  imports: [
    CommonModule,
    MaintenanceRoutingModule,
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
export class MaintenanceModule { }
