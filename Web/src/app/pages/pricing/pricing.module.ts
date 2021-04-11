import { NgModule } from '@angular/core';
import { PricingRoutingModule } from './pricing-routing.module';
import { PricingComponent } from './pricing.component';
import { DumbsModule, TooltipModule } from 'src/app/shared';

@NgModule({
  declarations: [
    PricingComponent
  ],
  imports: [
    PricingRoutingModule,
    DumbsModule,
    TooltipModule
  ]
})
export class PricingModule {}
