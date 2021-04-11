import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-form-banner',
  templateUrl: './form-banner.component.html',
  styleUrls: ['./form-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormBannerComponent implements OnInit {
  constructor () { }

  ngOnInit(): void { }
}
