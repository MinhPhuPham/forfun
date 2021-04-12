import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessSupportComponent } from './access-support.component';

const routes: Routes = [{ path: '', component: AccessSupportComponent, data: { state: 'app-access-support' } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessSupportRoutingModule { }
