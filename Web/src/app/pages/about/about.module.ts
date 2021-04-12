import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DumbsModule, SrcollableControlModule } from 'src/app/shared';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    DumbsModule,
    HttpClientModule,
    AboutRoutingModule,
    ReactiveFormsModule,
    SrcollableControlModule,
  ],
})
export class AboutModule {}
