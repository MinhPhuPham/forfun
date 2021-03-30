import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
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
