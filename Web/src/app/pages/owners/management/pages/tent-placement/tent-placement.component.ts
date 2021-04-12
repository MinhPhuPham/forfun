import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HEADER_PROPERTY, PROPERTY_BLOCK_CONTENT } from 'src/app/shared';

@Component({
  selector: 'app-tent-placement',
  templateUrl: './tent-placement.component.html',
  styleUrls: ['./tent-placement.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TentPlacementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  headerContent = HEADER_PROPERTY;
  blockContent = PROPERTY_BLOCK_CONTENT;

}
