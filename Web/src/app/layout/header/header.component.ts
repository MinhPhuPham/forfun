import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  //styleUrls: ['src/assets/scss/themes/_header.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  right = '-300';
  iconOwners = 'fa-plus';
  iconTenants = 'fa-plus';
  iconAbout = 'fa-plus';
  isOwnersShow = false;
  isTenantsShow = false;
  isAboutShow = false;

  ControlMobileMenu(isShow: boolean): void {
    this.right = isShow ? '0' : '-300';
  }

  ControlMobileSubMenu(isShow: boolean, subMenu: string): void {
    if (isShow) {
      if (subMenu == 'owners') {
        this.iconOwners = 'fa-plus';
        this.isOwnersShow = !this.isOwnersShow;
      } else if (subMenu == 'tenants') {
        this.iconTenants = 'fa-plus';
        this.isTenantsShow = !this.isTenantsShow;
      } else if (subMenu == 'about') {
        this.iconAbout = 'fa-plus';
        this.isAboutShow = !this.isAboutShow;
      }
    } else {
      if (subMenu == 'owners') {
        this.iconOwners = 'fa-minus';
        this.isOwnersShow = !this.isOwnersShow;
      } else if (subMenu == 'tenants') {
        this.iconTenants = 'fa-minus';
        this.isTenantsShow = !this.isTenantsShow;
      } else if (subMenu == 'about') {
        this.iconAbout = 'fa-minus';
        this.isAboutShow = !this.isAboutShow;
      }
    }
  }
}
