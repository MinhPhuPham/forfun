import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { AnimateOnScrollModule, BlockContentModule, DumbsModule, IntersectionObserverModule } from 'src/app/shared';
import { ServicesComponent } from './components/services/services.component';
import { ProtectionComponent } from './components/protection/protection.component';
import { PropertyManagementComponent } from './components/property-management/property-management.component';
import { NgbCarouselModule } from 'src/app/shared/modules/carousel/carousel.module';
import { IntroBusinessComponent } from './components/intro-business/intro-business.component';
import { SafePipe } from 'src/app/shared/pipes/safe.pipe';
import { HttpClientModule } from '@angular/common/http';

export const HomeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    ServicesComponent,
    ProtectionComponent,
    PropertyManagementComponent,
    IntroBusinessComponent,
    SafePipe,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DumbsModule,
    NgbCarouselModule,
    BlockContentModule,
    RouterModule.forChild(HomeRoutes),
    IntersectionObserverModule,
    AnimateOnScrollModule.forRoot(),
  ],
  exports: [SafePipe],
})
export class HomeModule {}
