import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-area-info',
  templateUrl: './area-info.component.html',
  styleUrls: ['./area-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AreaInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
