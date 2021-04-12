import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-confidence-guarantees',
  templateUrl: './confidence-guarantees.component.html',
  styleUrls: ['./confidence-guarantees.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfidenceGuaranteesComponent implements OnInit {

  confidences = [
    {
      img: 'icon_guarantee_30dayrental',
      title: '30 Day Rental Guarantee',
      content: "We Guarantee that we can find a quality tenant for your home in 30 days or the first month of management is <strong class='text-bold'>FREE!</strong>"
    },
    {
      img: 'icon_guarantee_satisfaction',
      title: 'Satisfaction Guarantee',
      content: 'If for any reason you are not completely happy with our services, you can cancel your management agreement without penalty at anytime.'
    },
    {
      img: 'icon_guarantee_tenantplacement',
      title: 'Leasing Guarantee',
      content: "We guaratee the tenant will stay for at least 9 months, or we'll find a replacement <strong class='text-bold'>FOR FREE!</strong>"
    },
    {
      img: 'icon_guarantee_results',
      title: 'Results Guarantee',
      content: "Pay us only after you get results. You don't pay us a dime until your property is rented & rent is collected."
    },
    {
      img: 'icon_guarantee_pet',
      title: 'Pet Guarantee',
      content: 'For no extra charge to owners, we guarantee your home will not be damaged by any approved pet.'
    },
    {
      img: 'icon_guarantee_owner_distribution',
      title: 'Owner Distribution Guarantee',
      content: "We guarantee to pay our owners by the 8th of each month. Tenant rent payments must be received with 2 banking days for funds to clear."
    },
    {
      img: 'icon_guarantee_reachability',
      title: 'Reachability Guarantee',
      content: 'Manager guarantees our staff will be reachable via phone, text, or email and will respond to any Owners concerns within 24 hours. If Manager fails to respond to Owner within 24 hours, the management fee for one month will be waived.'
    }
  ].map((item) => {
    return {
      ...item,
      img: `/assets/images/icons/${item.img}.png`
    }
  });

  constructor() { }

  ngOnInit(): void {
  }

}
