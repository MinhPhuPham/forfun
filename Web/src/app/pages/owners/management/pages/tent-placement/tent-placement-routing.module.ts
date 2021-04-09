import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TentPlacementComponent } from './tent-placement.component';

const routes: Routes = [{ path: '', component: TentPlacementComponent, data: { state: 'app-tent-placement' } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TentPlacementRoutingModule { }
