import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-advertisement-rental-analysis',
  templateUrl: './advertisement-rental-analysis.component.html',
  styleUrls: ['./advertisement-rental-analysis.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvertisementRentalAnalysisComponent implements OnInit {

  backgroundImage = '/assets/images/owners/management/Free_Rental_Analysis_banner.png';

  constructor() { }

  ngOnInit(): void {
  }

}
