import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ElementRef } from '@angular/core';
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
      link: 'overview'
    },
    {
      text: 'access & support',
      link: 'overview'
    },
    {
      text: 'compliance & inspections',
      link: 'overview'
    },
    {
      text: 'turnover',
      link: 'overview'
    },
    {
      text: 'guarantees',
      link: 'overview'
    }
  ]

  constructor(private router: Router, private elementRef: ElementRef) { }

  ngOnInit(): void {
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
      console.log(anchor);
      
      anchor.addEventListener('click', this.overViewClick)
    })
  }

  ngOnDestroy(): void {
    for (const obs of this._obsevers) {
      obs.unsubscribe();
    }

    this.groupBtn.forEach((anchor: HTMLAnchorElement) => {
      anchor.removeEventListener('click', this.overViewClick)
    })
  }

  overViewClick() {
    console.log('click');
    
  }

}
