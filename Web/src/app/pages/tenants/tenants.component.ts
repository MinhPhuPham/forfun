import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Banner, PageId } from 'src/app/shared/models/banner';
import { BlockContent } from 'src/app/shared/models/block-content';
import { AnimateOnScrollModule, DumbsModule } from 'src/app/shared';

@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.component.html',
  styles: [`
    .block-content { padding-top: 1.5rem }
  `],
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
    backgroundImage : "/assets/images/tenants/cpm_banner_tenants.webp"
  }

  blockContent : BlockContent[] = [
    {
      title : "FUTURE TENANTS",
      content : "<li>Browse Our Listings</li><li>Free Help From Local Experts</li><li>Ask Us a Question</li>",
      image : "/assets/images/icons/icon_tenants_new.png",
      imageAlt : "Future tenants"
    },
    {
      title : "CURRENT TENANTS",
      content : "<li>Pay Rent Online</li><li>Request Maintenance</li><li>Contact Property Manager</li>",
      image : "/assets/images/icons/icon_tenants_existing.png",
      imageAlt : "Current tenants"
    },
    {
      title : "TENANT RESOURCES",
      content : "<li>Utility Connections</li><li>Moving In & Out</li><li>Rental Guidelines & Policies</li>",
      image : "/assets/images/icons/icon_tenants_resources.png",
      imageAlt : "Tenants resources"
    }
  ]

}
