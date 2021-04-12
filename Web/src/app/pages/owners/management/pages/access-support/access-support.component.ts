import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HEADER_PROPERTY, PROPERTY_BLOCK_CONTENT } from 'src/app/shared';

@Component({
  selector: 'app-access-support',
  templateUrl: './access-support.component.html',
  styleUrls: ['./access-support.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccessSupportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  headerContent = HEADER_PROPERTY;
  blockContent = PROPERTY_BLOCK_CONTENT;
}
