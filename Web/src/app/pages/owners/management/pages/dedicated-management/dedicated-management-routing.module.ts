import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DedicatedManagementComponent } from './dedicated-management.component';

const routes: Routes = [{ path: '', component: DedicatedManagementComponent, data: { state: 'app-dedicated-management' } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DedicatedManagementRoutingModule { }
