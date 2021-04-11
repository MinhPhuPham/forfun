import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HEADER_PROPERTY, PROPERTY_BLOCK_CONTENT } from 'src/app/shared';

@Component({
  selector: 'app-dedicated-management',
  templateUrl: './dedicated-management.component.html',
  styleUrls: ['./dedicated-management.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DedicatedManagementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  headerContent = HEADER_PROPERTY;
  blockContent = PROPERTY_BLOCK_CONTENT;

}
