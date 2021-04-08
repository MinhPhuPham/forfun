import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';
import { ConfidenceGuaranteesModule, InclusiveLeasingModule } from '../../shared';


@NgModule({
  declarations: [OverviewComponent],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    InclusiveLeasingModule,
    ConfidenceGuaranteesModule
  ]
})
export class OverviewModule { }
