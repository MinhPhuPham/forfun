import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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

}
