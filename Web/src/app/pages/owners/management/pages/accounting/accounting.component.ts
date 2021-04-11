import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HEADER_PROPERTY, PROPERTY_BLOCK_CONTENT } from 'src/app/shared';

@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  headerContent = HEADER_PROPERTY;
  blockContent = PROPERTY_BLOCK_CONTENT;
}
