import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyTurnoverComponent } from './property-turnover.component';

const routes: Routes = [{ path: '', component: PropertyTurnoverComponent, data: { state: 'app-property-turnover' } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyTurnoverRoutingModule { }
