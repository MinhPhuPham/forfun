import { Component, OnInit, ChangeDetectionStrategy, Input, TemplateRef } from '@angular/core';
import { Banner } from 'src/app/shared/models/banner';
import { getBrowserName } from 'src/app/shared/utils/getBrowserName';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerComponent implements OnInit {

  constructor() { }

  @Input() banner: Banner;
  @Input() buttonBannerTemplate: TemplateRef<any>;

  ngOnInit(): void {

    var splitted = this.banner.backgroundImage.split(".");
    if (getBrowserName() === 'safari' && splitted[splitted.length - 1].toLowerCase() === 'webp') {
      splitted[splitted.length - 1] = '.jpf';
      this.banner.backgroundImage = splitted.join('');
    }
  }
}
