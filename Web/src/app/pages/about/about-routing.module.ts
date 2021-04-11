import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';

const routes: Routes = [
  { path: '',
    component: AboutComponent,
    children: [
      { path: '', loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.AboutUsModule) },
      { path: 'our-team', loadChildren: () => import('./pages/our-team/our-team.module').then(m => m.OurTeamModule) },
      { path: 'careers', loadChildren: () => import('./pages/careers/careers.module').then(m => m.CareersModule) },
      { path: 'contact-us', loadChildren: () => import('./pages/contact-us/contact-us.module').then(m => m.ContactUsModule) },
      {
        path: '**',
        redirectTo: '404',
        pathMatch: 'full'
      }
    ]
  }
];

// const routes: Routes = [
//   { path: '', component: AboutComponent },
//   { path: 'our-team', component: OurTeamComponent },
//   { path: 'careers', component: CareersComponent }
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
