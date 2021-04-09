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
      path: '/management/overview',
      inner: '<a (click)="overViewClick()" class="btn btn-clock yellow">FIND OUT WHAT YOUR HOME COULD RENT FOR</a>'
    },
    {
      pageID: PageId.Tenants,
      mainTitle: "Quality Tenant Placement",
      subTitle: `Lease it, manage it, protect it, guaranteed!`,
      backgroundImage: "/assets/images/owners/management/cpm_banner_owners.png",
      path: '/management/tenant-placement'
    },
    {
      pageID: PageId.Tenants,
      mainTitle: "Reliable Maintenance",
      subTitle: `Lease it, manage it, protect it, guaranteed!`,
      backgroundImage: "/assets/images/owners/management/cpm_banner_owners.png",
      path: '/management/maintenance'
    }
  ]
  activeBanner: Banner = this.banner[0];

  tabs: Tabs[] = [
    {
      text: 'Overview',
      link: 'overview'
    },
    {
      text: 'tenant placement',
      link: 'tenant-placement'
    },
    {
      text: 'management',
      link: 'management'
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
    },
    {
      text: 'guarantees',
      link: 'guarantees'
    }
  ]

  constructor(private router: Router, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.activeBanner = this.banner.find(item => item.path == this.router.url);

    this._obsevers.push(
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe((event: NavigationEnd) => {
        this.activeBanner = this.banner.find(item => item.path == event.url);
      })
    );
  }

  ngAfterViewInit() {
    this.groupBtn = this.elementRef.nativeElement.querySelectorAll('a');
    this.groupBtn.forEach((anchor: HTMLAnchorElement) => {
      anchor.addEventListener('click', this.overViewClick)
    })

    // const tab = this.tabsWrapper.nativeElement;
    // for (const eachChild of tab.children) {
    //   console.log(eachChild.clientWidth);
    // }
  }

  ngOnDestroy(): void {
    for (const obs of this._obsevers) {
      obs.unsubscribe();
    }

    this.groupBtn.forEach((anchor: HTMLAnchorElement) => {
      anchor.removeEventListener('click', this.overViewClick)
    })
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

  overViewClick() {
    console.log('click');
  }

  scrollPagination(direction: string) {
    const longScroll = direction == "left" ? -(this.tabsWrapper.nativeElement.offsetWidth) : this.tabsWrapper.nativeElement.offsetWidth;
    let scroller = this.tabsWrapper.nativeElement.scrollLeft + longScroll;
    this.tabsWrapper.nativeElement.scrollTo({ left: scroller, behavior: 'smooth' });
  }
}
