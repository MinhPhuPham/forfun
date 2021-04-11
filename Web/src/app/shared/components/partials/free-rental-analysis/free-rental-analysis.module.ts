import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreeRentalAnalysisComponent } from './free-rental-analysis.component';
import { AnimateOnScrollModule } from 'src/app/shared/modules';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FreeRentalAnalysisComponent],
  imports: [
    CommonModule,
    RouterModule,
    AnimateOnScrollModule.forRoot()
  ],
  exports: [FreeRentalAnalysisComponent]
})
export class FreeRentalAnalysisModule { }
