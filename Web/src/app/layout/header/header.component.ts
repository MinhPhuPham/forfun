import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SubMenuID } from 'src/app/shared/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  //styleUrls: ['src/assets/scss/themes/_header.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  right = '-300';
  iconOwners = 'fa-plus';
  iconTenants = 'fa-plus';
  iconAbout = 'fa-plus';
  isOwnersShow = false;
  isTenantsShow = false;
  isAboutShow = false;
  constructor() { }

  ngOnInit(): void {
  }

  ControlMobileMenu(isShow: boolean) : void {
    this.right = isShow ? "0" : '-300';
  ControlMobileMenu(isShow: boolean) : void {
    this.right = isShow ? "0" : '-300';
  ControlMobileSubMenu(isShow : boolean, id : SubMenuID) : void {
    if(isShow) {
      if(id == this.subMenuID.Owners) {
    if(isShow) {
      if(subMenu == 'owners') {
      }
      else if(id == this.subMenuID.Tenants) {
      }
      else if(subMenu == 'tenants') {
      }
      else if(id == this.subMenuID.AboutUs) {
      }
      else if(subMenu == 'about') {
        this.iconAbout = 'fa-plus';
    }
    else {
      if(id == this.subMenuID.Owners) {
    else {
      if(subMenu == 'owners') {
      }
      else if(id == this.subMenuID.Tenants) {
      }
      else if(subMenu == 'tenants') {
      }
      else if(id == this.subMenuID.AboutUs) {
      }
      else if(subMenu == 'about') {
        this.iconAbout = 'fa-minus';
        this.isAboutShow = !this.isAboutShow;
      }
    }
  }
}
