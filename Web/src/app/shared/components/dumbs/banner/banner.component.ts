import { Component, OnInit, ChangeDetectionStrategy, Input, TemplateRef } from '@angular/core';
import { Banner } from 'src/app/shared/models/banner';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerComponent implements OnInit {

  constructor() { }

  @Input() backgroundImage: string = '/assets/images/home/cpm_banner_home.webp';
  @Input() banner: Banner;
  @Input() buttonBannerTemplate: TemplateRef<any>;

  ngOnInit(): void {
    const brower = this.getBrowserName();
    console.log("brower", brower)
    if (brower === 'safari')
      this.backgroundImage = '/assets/images/home/cpm_banner_home.jpf';
  }
  public getBrowserName() {
    const agent = window.navigator.userAgent.toLowerCase()
    switch (true) {
      case agent.indexOf('edge') > -1:
        return 'edge';
      case agent.indexOf('opr') > -1 && !!(<any>window).opr:
        return 'opera';
      case agent.indexOf('chrome') > -1 && !!(<any>window).chrome:
        return 'chrome';
      case agent.indexOf('trident') > -1:
        return 'ie';
      case agent.indexOf('firefox') > -1:
        return 'firefox';
      case agent.indexOf('safari') > -1:
        return 'safari';
      default:
        return 'other';
    }
  }


}
