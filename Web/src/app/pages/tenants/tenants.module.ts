import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TenantsRoutingModule } from './tenants-routing.module';
import { TenantsComponent } from './tenants.component';
import { DumbsModule } from 'src/app/shared';
import { GetHelpComponent } from './get-help/get-help.component';
import { RentEasyComponent } from './rent-easy/rent-easy.component';
import { GetQuoteComponent } from './get-quote/get-quote.component';


@NgModule({
  declarations: [
    TenantsComponent,
    GetHelpComponent,
    RentEasyComponent,
    GetQuoteComponent
  ],
  imports: [
    CommonModule,
    DumbsModule,
    HttpClientModule,
    TenantsRoutingModule,
  ],
})
export class TenantsModule {}
