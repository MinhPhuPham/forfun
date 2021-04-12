import {
  ChangeDetectionStrategy, Component,



  ElementRef, OnInit,

  ViewChild
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { Banner, PageId, Tabs } from 'src/app/shared/models';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit {
  private _obsevers: Subscription[] = [];
  private groupBtn: [] = [];

  banner: Banner = {
      pageID: PageId.AboutUs,
      mainTitle: 'What We’re About',
      subTitle: `Over the course of our long history in Southern California, we've helped countless <br>
                 property owners get the most out of their rental homes.`,
      backgroundImage: '/assets/images/about-us/cpm_banner_aboutus.png'
    };

  tabs: Tabs[] = [
    {
      text: 'ABOUT US',
      link: '/about',
    },
    {
      text: 'OUR TEAM',
      link: '/about/our-team',
    },
    {
      text: 'CAREERS',
      link: '/about/careers',
    },
    {
      text: 'CONTACT US',
      link: '/about/contact-us',
    },
  ];

  @ViewChild('tabsWrap', { read: ElementRef })
  public tabsWrapper: ElementRef<any>;

  // constructor(private http: HttpClient) {
  //   this.http.get('https://localhost:44314/form').subscribe((resp: any) => {
  //     this.formData = resp.data as DynamicForm;
  //     this.dynamicForm.loadData(this.formData);
  //   });
  // }

  constructor(private router: Router, private elementRef: ElementRef) {}

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.groupBtn = this.elementRef.nativeElement.querySelectorAll('a');
    this.groupBtn.forEach((anchor: HTMLAnchorElement) => {
      anchor.addEventListener('click', this.overViewClick);
    });

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
      anchor.removeEventListener('click', this.overViewClick);
    });
  }

  overViewClick() {
    console.log('click');
  }

  scrollPagination(direction: string) {
    const longScroll =
      direction == 'left'
        ? -this.tabsWrapper.nativeElement.offsetWidth
        : this.tabsWrapper.nativeElement.offsetWidth;
    let scroller = this.tabsWrapper.nativeElement.scrollLeft + longScroll;
    this.tabsWrapper.nativeElement.scrollTo({
      left: scroller,
      behavior: 'smooth',
    });
  }
}
