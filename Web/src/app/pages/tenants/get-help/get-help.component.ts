import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-get-help',
  templateUrl: './get-help.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GetHelpComponent implements OnInit {

  constructor () {
  }

  ngOnInit(): void {
  }
}
