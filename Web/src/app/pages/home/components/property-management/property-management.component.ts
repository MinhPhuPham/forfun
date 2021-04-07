import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-property-management',
  templateUrl: './property-management.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyManagementComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  blockContent = [
    {
      title : "EXPERIENCED MANAGEMENT",
      content : "You are assigned a full-time property manager that is an expert in your geographical area who serves as a single point of contact for you, your tenants, and vendors during the management process. Transparency and communication is their top priority.",
      image : "/assets/images/icons/icon_home_experience_management.png",
      imageAlt : "Experience in management"
    },
    {
      title : "RELIABLE MAINTENANCE",
      content : "Unlike many other property management companies, we focus exclusively on residential rentals. We are the local property management experts, and we are dedicated to helping you rent and manage your home.",
      image : "/assets/images/icons/icon_home_reliable_maintenance.png",
      imageAlt : "Experience in management"
    },
    {
      title : "24/7 ACCESS AND SUPPORT",
      content : "Our team works together to take the hassle off your plate and keep your portfolio running smoothly. Our comprehensive software gives you real-time 24/7 access to everything you need to know about your property.",
      image : "/assets/images/icons/icon_home_24_7_access.png",
      imageAlt : "Experience in management"
    }
  ]

}
