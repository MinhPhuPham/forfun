import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
	},
	{
		path: 'pricing',
		loadChildren: () => import('./pages/pricing/pricing.module').then(m => m.PricingModule)
	},
	{
		path: 'tenants',
		loadChildren: () => import('./pages/tenants/tenants.module').then(m => m.TenantsModule)
	},
	{
		path: 'about',
		loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
	},

	{ path: 'management', loadChildren: () => import('./pages/owners/management/management.module').then(m => m.ManagementModule) },
	{
		path: '**',
		redirectTo: '404',
		pathMatch: 'full'
	},
	{
		path: '404',
		component: ErrorComponent
	},
	{ path: 'management', loadChildren: () => import('./pages/owners/management/management.module').then(m => m.ManagementModule) }
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})

export class AppRoutingModule { }
