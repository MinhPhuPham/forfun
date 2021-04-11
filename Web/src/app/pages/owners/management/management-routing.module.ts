import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementComponent } from './management.component';

const routes: Routes = [
  {
    path: '',
    component: ManagementComponent,
    children: [
      {
        path: '',
        redirectTo: 'chino-hills-property-management',
        pathMatch: 'full'
      },
      { path: 'chino-hills-property-management', loadChildren: () => import('./pages/overview/overview.module').then(m => m.OverviewModule) },
      { path: 'tenant-placement', loadChildren: () => import('./pages/tent-placement/tent-placement.module').then(m => m.TentPlacementModule) },
      { path: 'maintenance', loadChildren: () => import('./pages/maintenance/maintenance.module').then(m => m.MaintenanceModule) },
      { path: 'dedicated-management', loadChildren: () => import('./pages/dedicated-management/dedicated-management.module').then(m => m.DedicatedManagementModule) },
      { path: 'accounting', loadChildren: () => import('./pages/accounting/accounting.module').then(m => m.AccountingModule) },
      { path: 'access-support', loadChildren: () => import('./pages/access-support/access-support.module').then(m => m.AccessSupportModule) },
      { path: 'compliance-inspections', loadChildren: () => import('./pages/compliance-inspections/compliance-inspections.module').then(m => m.ComplianceInspectionsModule) },
      { path: 'turnover', loadChildren: () => import('./pages/property-turnover/property-turnover.module').then(m => m.PropertyTurnoverModule) },
      {
        path: '**',
        redirectTo: '404'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
