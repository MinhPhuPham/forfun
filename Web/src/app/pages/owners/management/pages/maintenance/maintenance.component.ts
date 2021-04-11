import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HEADER_PROPERTY, PROPERTY_BLOCK_CONTENT } from 'src/app/shared';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MaintenanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  headerContent = HEADER_PROPERTY;
  blockContent = PROPERTY_BLOCK_CONTENT;
}
