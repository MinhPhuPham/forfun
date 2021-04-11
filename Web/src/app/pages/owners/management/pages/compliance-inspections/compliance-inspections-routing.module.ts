import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplianceInspectionsComponent } from './compliance-inspections.component';

const routes: Routes = [{ path: '', component: ComplianceInspectionsComponent, data: { state: 'app-compliance-inspections' } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplianceInspectionsRoutingModule { }
