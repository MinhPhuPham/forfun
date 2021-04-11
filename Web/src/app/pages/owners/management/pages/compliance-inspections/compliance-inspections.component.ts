import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HEADER_PROPERTY, PROPERTY_BLOCK_CONTENT } from 'src/app/shared';

@Component({
  selector: 'app-compliance-inspections',
  templateUrl: './compliance-inspections.component.html',
  styleUrls: ['./compliance-inspections.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComplianceInspectionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  headerContent = HEADER_PROPERTY;
  blockContent = PROPERTY_BLOCK_CONTENT;
}
