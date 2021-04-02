import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SubMenuID } from 'src/app/shared/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  right = '-300';
  iconOwners = 'fa-plus';
  iconTenants = 'fa-plus';
  iconAbout = 'fa-plus';
  isOwnersShow = false;
  isTenantsShow = false;
  isAboutShow = false;
  subMenuID =  SubMenuID;

  constructor() { }

  ngOnInit(): void {
  }

  ControlMobileMenu(isShow: boolean) : void {
    this.right = isShow ? "0" : '-300';
  }

  ControlMobileSubMenu(isShow : boolean, id : SubMenuID) : void {
    if(isShow) {
      if(id == this.subMenuID.Owners) {
        this.iconOwners = 'fa-plus';
        this.isOwnersShow = !this.isOwnersShow;
      }
      else if(id == this.subMenuID.Tenants) {
        this.iconTenants = 'fa-plus';
        this.isTenantsShow = !this.isTenantsShow;
      }
      else if(id == this.subMenuID.AboutUs) {
        this.iconAbout = 'fa-plus';
        this.isAboutShow = !this.isAboutShow;
      }
    }
    else {
      if(id == this.subMenuID.Owners) {
        this.iconOwners = 'fa-minus';
        this.isOwnersShow = !this.isOwnersShow;
      }
      else if(id == this.subMenuID.Tenants) {
        this.iconTenants = 'fa-minus';
        this.isTenantsShow = !this.isTenantsShow;
      }
      else if(id == this.subMenuID.AboutUs) {
        this.iconAbout = 'fa-minus';
        this.isAboutShow = !this.isAboutShow;
      }
    }
  }
}
