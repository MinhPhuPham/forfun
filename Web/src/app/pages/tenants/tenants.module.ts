import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TenantsRoutingModule } from './tenants-routing.module';
import { TenantsComponent } from './tenants.component';
import { DumbsModule } from 'src/app/shared';
import { GetHelpComponent } from './get-help/get-help.component';


@NgModule({
  declarations: [
    TenantsComponent,
    GetHelpComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TenantsRoutingModule,
    DumbsModule
  ],
})
export class TenantsModule {}
