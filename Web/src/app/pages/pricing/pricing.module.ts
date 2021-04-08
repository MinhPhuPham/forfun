import { NgModule } from '@angular/core';
import { PricingRoutingModule } from './pricing-routing.module';
import { PricingComponent } from './pricing.component';
import { DumbsModule } from 'src/app/shared';

@NgModule({
  declarations: [
    PricingComponent
  ],
  imports: [
    PricingRoutingModule,
    DumbsModule
  ]
})
export class PricingModule {}
