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
        redirectTo: 'overview',
        pathMatch: 'full'
      },
      { path: 'overview', loadChildren: () => import('./pages/overview/overview.module').then(m => m.OverviewModule) },
      { path: 'tenant-placement', loadChildren: () => import('./pages/tent-placement/tent-placement.module').then(m => m.TentPlacementModule) },
      { path: 'maintenance', loadChildren: () => import('./pages/maintenance/maintenance.module').then(m => m.MaintenanceModule) },
      {
        path: '**',
        redirectTo: '404',
        pathMatch: 'full'
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
