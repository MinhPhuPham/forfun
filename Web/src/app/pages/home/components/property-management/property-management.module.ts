import { NgModule } from '@angular/core';

import { PropertyManagementComponent } from './property-management.component';
import { AnimateOnScrollModule, DumbsModule } from 'src/app/shared';
import { BlockContentComponent } from 'src/app/shared/components/dumbs/block-content/block-content.component';

@NgModule({
  declarations: [PropertyManagementComponent, BlockContentComponent],
  imports: [DumbsModule, AnimateOnScrollModule.forRoot()],
})
export class PropertyManagementModule {}
