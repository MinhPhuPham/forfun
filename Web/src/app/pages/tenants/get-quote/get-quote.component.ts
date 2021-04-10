import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-get-quote',
  templateUrl: './get-quote.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GetQuoteComponent implements OnInit {

  constructor () {
  }

  ngOnInit(): void {
  }
}
