import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { fadeInOut, Tabs } from 'src/app/shared';
import { NavigationEnd, Router } from "@angular/router";
import { Banner, PageId } from 'src/app/shared/models/banner';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss'],
  animations: [fadeInOut],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ManagementComponent implements OnInit, OnDestroy {
  private _obsevers: Subscription[] = [];
  private groupBtn: [] = [];

  @ViewChild('tabsWrap', { read: ElementRef }) public tabsWrapper: ElementRef<any>;

  banner: Banner[] = [
    {
      pageID: PageId.Tenants,
      mainTitle: "24/7 Chino Hills Property Management",
      subTitle: `Lease it, manage it, protect it, guaranteed!`,
      backgroundImage: "/assets/images/owners/management/cpm_banner_owners.png",
      path: '/management/chino-hills-property-management',
      innerSingle: true
    },
    {
      pageID: PageId.Tenants,
      mainTitle: "Quality Tenant Placement",
      subTitle: `Lease it, manage it, protect it, guaranteed!`,
      backgroundImage: "/assets/images/owners/management/cpm_banner_owners.png",
      path: '/management/tenant-placement',
      innerSingle: false
    },
    {
      pageID: PageId.Tenants,
      mainTitle: "Dedicated Property Manager",
      subTitle: `Lease it, manage it, protect it, guaranteed!`,
      backgroundImage: "/assets/images/owners/management/cpm_banner_owners.png",
      path: '/management/dedicated-management',
      innerSingle: false
    },
    {
      pageID: PageId.Tenants,
      mainTitle: "Reliable Maintenance",
      subTitle: `Lease it, manage it, protect it, guaranteed!`,
      backgroundImage: "/assets/images/owners/management/cpm_banner_owners.png",
      path: '/management/maintenance',
      innerSingle: false
    },
    {
      pageID: PageId.Tenants,
      mainTitle: "Accounting & Financial Reporting",
      subTitle: `Lease it, manage it, protect it, guaranteed!`,
      backgroundImage: "/assets/images/owners/management/cpm_banner_owners.png",
      path: '/management/accounting',
      innerSingle: false
    },
    {
      pageID: PageId.Tenants,
      mainTitle: "24/7 Access & Support",
      subTitle: `Lease it, manage it, protect it, guaranteed!`,
      backgroundImage: "/assets/images/owners/management/cpm_banner_owners.png",
      path: '/management/access-support',
      innerSingle: false
    },
    {
      pageID: PageId.Tenants,
      mainTitle: "Compliance & Inspections",
      subTitle: `Lease it, manage it, protect it, guaranteed!`,
      backgroundImage: "/assets/images/owners/management/cpm_banner_owners.png",
      path: '/management/compliance-inspections',
      innerSingle: false
    },
    {
      pageID: PageId.Tenants,
      mainTitle: "Property Turnover",
      subTitle: `Lease it, manage it, protect it, guaranteed!`,
      backgroundImage: "/assets/images/owners/management/cpm_banner_owners.png",
      path: '/management/turnover',
      innerSingle: false
    }
  ]
  activeBanner: Banner;

  tabs: Tabs[] = [
    {
      text: 'Overview',
      link: 'chino-hills-property-management'
    },
    {
      text: 'tenant placement',
      link: 'tenant-placement'
    },
    {
      text: 'management',
      link: 'dedicated-management'
    },
    {
      text: 'maintenance',
      link: 'maintenance'
    },
    {
      text: 'accounting',
      link: 'accounting'
    },
    {
      text: 'access & support',
      link: 'access-support'
    },
    {
      text: 'compliance & inspections',
      link: 'compliance-inspections'
    },
    {
      text: 'turnover',
      link: 'turnover'
    }
  ]

  constructor(private router: Router, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.activeBanner = this.banner.find(item => item.path == this.router.url);
    console.log(this.router.url);

    this._obsevers.push(
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe((event: NavigationEnd) => {
        this.activeBanner = this.banner.find(item => item.path == event.url);
      })
    );
  }

  ngAfterViewInit() {
    // const tab = this.tabsWrapper.nativeElement;
    // for (const eachChild of tab.children) {
    //   console.log(eachChild.clientWidth);
    // }
  }

  ngOnDestroy(): void {
    for (const obs of this._obsevers) {
      obs.unsubscribe();
    }
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

  scrollToElement(id: string) {
    const el = document.getElementById(id) as HTMLElement;
    el.scrollIntoView({ behavior: 'smooth', block: "start", inline: "start" });
  }
}
