import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { LayoutModule } from '../layout/layout.module';

const routes: Routes = [
	{
		path: '',
		component: PagesComponent,
		children: [
			{
				path: '',
				loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
			},
      {
        path: '**',
        redirectTo: '404',
        pathMatch: 'full'
      }
		],
	}
];

@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule.forChild(routes)
  ]
})
export class PagesModule { }
