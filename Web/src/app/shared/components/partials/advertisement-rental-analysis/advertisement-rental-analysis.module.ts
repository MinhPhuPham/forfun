import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertisementRentalAnalysisComponent } from './advertisement-rental-analysis.component';
import { ScrollToDivModule } from 'src/app/shared/directives';
import { AnimateOnScrollModule } from 'src/app/shared/modules';



@NgModule({
  declarations: [AdvertisementRentalAnalysisComponent],
  imports: [
    CommonModule,
    ScrollToDivModule,
    AnimateOnScrollModule.forRoot()
  ],
  exports: [AdvertisementRentalAnalysisComponent]
})
export class AdvertisementRentalAnalysisModule { }
