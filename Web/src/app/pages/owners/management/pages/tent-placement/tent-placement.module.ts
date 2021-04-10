import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TentPlacementRoutingModule } from './tent-placement-routing.module';
import { TentPlacementComponent } from './tent-placement.component';
import { ConfidenceGuaranteesModule, InclusiveLeasingModule } from '../../shared';


@NgModule({
  declarations: [TentPlacementComponent],
  imports: [
    CommonModule,
    TentPlacementRoutingModule,
    InclusiveLeasingModule,
    ConfidenceGuaranteesModule
  ]
})
export class TentPlacementModule { }
