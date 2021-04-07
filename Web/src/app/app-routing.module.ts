import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
	},
  { 	path: 'tenants',
		loadChildren: () => import('./pages/tenants/tenants.module').then(m => m.TenantsModule)
	},
	{ 	path: 'about',
		loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
	},
	{
		path: '**',
		redirectTo: '404',
		pathMatch: 'full'
	},
	{
		path: '404',
		component: ErrorComponent
	}
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
