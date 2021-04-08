import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Banner, PageId  } from 'src/app/shared/models/banner';

@Component({
  selector: 'app-black-check',
  templateUrl: './black-check.component.html',
  styleUrls: ['./pricing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PricingComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
