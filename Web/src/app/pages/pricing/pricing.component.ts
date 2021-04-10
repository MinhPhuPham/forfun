import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Banner, PageId  } from 'src/app/shared/models/banner';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PricingComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  banner : Banner = {
    pageID : PageId.Pricing,
    mainTitle : "Full Service Property Solutions",
    subTitle : `For owners and investors in the San Bernardino, Riverside, Orange, and Los Angeles Counties`,
    backgroundImage : "/assets/images/pricing/cpm_banner_pricing.webp"
  }

}
