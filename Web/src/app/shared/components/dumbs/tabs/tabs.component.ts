import { Component, OnInit, ChangeDetectionStrategy, Input, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { filter } from 'rxjs/operators';
import { Banner, Tabs } from 'src/app/shared/models';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent implements OnInit , OnDestroy {
  private _obsevers: Subscription[] = [];
  private groupBtn: [] = [];

  @ViewChild('tabsWrap', { read: ElementRef }) public tabsWrapper: ElementRef<any>;

  @Input() tabs: Tabs[] = [];
  @Input() banner: Banner[] = [];

  constructor(private router: Router, private elementRef: ElementRef) { }

  activeBanner: Banner = this.banner[0];

  ngOnInit(): void {
    this._obsevers.push(
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe((event: NavigationEnd) => {
        this.activeBanner = this.banner.find(item => item.path == event.url);
      })
    );
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
