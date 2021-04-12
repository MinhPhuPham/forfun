import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InclusiveLeasingComponent } from './inclusive-leasing.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [InclusiveLeasingComponent],
  exports: [InclusiveLeasingComponent],
  imports: [CommonModule, RouterModule],
})
export class InclusiveLeasingModule {}
