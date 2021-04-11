import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import { DumbsModule } from 'src/app/shared';
import { ServiceComponent } from './components/service/service.component';
import { FormBannerComponent } from './components/form-banner/form-banner.component';


@NgModule({
  declarations: [AboutUsComponent, ServiceComponent, FormBannerComponent ],
  imports: [
    CommonModule,
    DumbsModule,
    AboutUsRoutingModule
  ]
})
export class AboutUsModule { }
