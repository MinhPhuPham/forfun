import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SocialContactsComponent } from './header/social-contacts/social-contacts.component';
import { NavbarComponent } from './header/navbar/navbar.component';

@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    SocialContactsComponent, NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
