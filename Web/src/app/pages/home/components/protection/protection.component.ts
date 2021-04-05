import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from 'src/app/shared/modules/carousel/carousel';

@Component({
  selector: 'app-protection',
  templateUrl: './protection.component.html',
  styleUrls: ['./protection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProtectionComponent implements OnInit {

  propertyButton = {
    text: 'explore our guarantees',
    link: '',
    class: 'yellow text-white'
  }

  images = [
    {
      img: 'icon_guarantee_pet',
      title: 'Pet Guarantee',
      content: 'Up to $1,000 in damage protection for any pet damage above and beyond what the security deposit covers.'
    },
    {
      img: 'icon_guarantee_owner_distribution',
      title: 'Owner Distribution Guarantee',
      content: 'Manager guarantees Owner Distribution payments will be processed by the 8th of each month.'
    },
    {
      img: 'icon_guarantee_30dayrental',
      title: '30 Day Rental Guarantee',
      content: 'If we are unable to lease your home in 30 days or less we will give you ONE month management free! This means we will WAIVE your first month management fee.'
    },
    {
      img: 'icon_guarantee_reachability',
      title: 'Reachability Guarantee',
      content: 'Manager guarantees our staff will be reachable via phone, text, or email and will respond to any Owners concerns within 24 hours. If Manager fails to respond to Owner within 24 hours, the management fee for one month will be waived.'
    },
    {
      img: 'icon_guarantee_satisfaction',
      title: 'Satisfaction Guarantee',
      content: 'Our goal is to ensure every client has a great customer experience. If for any reason you are not completely happy with our services, you can cancel your management agreement at anytime without penalty.'
    },
    {
      img: 'icon_guarantee_tenantplacement',
      title: 'Leasing Guarantee',
      content: 'You should never have to pay twice for us to find a new tenant for your property. If a tenant fails to complete their lease terms there will be no fee charged to replace that tenant.'
    },
    {
      img: 'icon_guarantee_results',
      title: 'Results Guarantee',
      content: 'We market, advertise, screen tenants, prepare lease agreements and perform a move in inspection all before you pay anything. Our result guarantee provides peace of mind knowing we do not get paid until a qualified tenant is secured and moves into the property.'
    }
  ].map((item) => {
    return {
      ...item,
      img: `/assets/images/icons/${item.img}.png`
    }
  });

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  ngOnInit(): void {

  }

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

}
