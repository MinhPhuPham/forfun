import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HEADER_PROPERTY, PROPERTY_BLOCK_CONTENT } from 'src/app/shared';

@Component({
  selector: 'app-property-management',
  templateUrl: './property-management.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyManagementComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  headerContent = HEADER_PROPERTY;
  blockContent = PROPERTY_BLOCK_CONTENT;
}
