import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-maintenance',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutUsComponent implements OnInit {

  blockContent = [
    {
      title : "A HISTORY OF SUCCESS",
      content : `Over the course of our long history in Southern California, we've helped countless property owners get the
                 most out of their rental homes.`,
      image : "/assets/images/icons/icon_aboutus_success.png",
      imageAlt : "Experience in management"
    },
    {
      title : "ONE-ON-ONE SUPPORT",
      content : `Don't find yourself with a manager who treats you like a number in the crowd. We provide individualized
                 attention for every one of our clients.`,
      image : "/assets/images/icons/icon_home_24_7_access.png",
      imageAlt : "Experience in management"
    },
    {
      title : "24/7 ONLINE PORTAL ACCESS",
      content : `Monitor your home's health at any time by signing in to the account portal. Statements and inspection notes
                 are just a click away.`,
      image : "/assets/images/icons/icon_marketing_24_7_leasing.png",
      imageAlt : "Experience in management"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
