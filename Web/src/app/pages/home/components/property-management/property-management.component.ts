import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-property-management',
  templateUrl: './property-management.component.html',
  styleUrls: ['./property-management.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyManagementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
