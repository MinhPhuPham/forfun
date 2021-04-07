import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Banner, PageId } from 'src/app/shared/models/banner';
import { BlockContent } from 'src/app/shared/models/block-content';

@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.component.html',
  styleUrls: ['./tenants.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TenantsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  banner : Banner = {
    pageID : PageId.Tenants,
    mainTitle : "Solutions for Tenants",
    subTitle : `Search, pay, maintenance, resources...whatever you need you’ll find it here`,
    backgroundImage : "/assets/images/tenants/cpm_banner_tenants.png"
  }

  blockContent : BlockContent[] = [
    {
      title : "FUTURE TENANTS",
      content : "<li>Browse Our Listings</li><br><li>Free Help From Local Experts</li><br><li>Ask Us a Question</li>",
      image : "/assets/images/icons/icon_tenants_new.png",
      imageAlt : "Future tenants"
    },
    {
      title : "CURRENT TENANTS",
      content : "<li>Pay Rent Online</li><br><li>Request Maintenance</li><br><li>Contact Property Manager</li>",
      image : "/assets/images/icons/icon_tenants_existing.png",
      imageAlt : "Current tenants"
    },
    {
      title : "TENANT RESOURCES",
      content : "<li>Utility Connections</li><br><li>Moving In & Out</li><br><li>Rental Guidelines & Policies</li>",
      image : "/assets/images/icons/icon_tenants_resources.png",
      imageAlt : "Tenants resources"
    }
  ]

}
