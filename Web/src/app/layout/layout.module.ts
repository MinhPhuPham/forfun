import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbAccordionModule } from '../shared/modules';
import { RouterModule } from '@angular/router';
import { HideOnScrollModule } from '../shared';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    RouterModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgbAccordionModule,
    HideOnScrollModule
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class LayoutModule {}
