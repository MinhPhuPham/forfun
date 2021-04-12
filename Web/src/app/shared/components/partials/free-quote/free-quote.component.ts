import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-free-quote',
  templateUrl: './free-quote.component.html',
  styleUrls: ['./free-quote.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FreeQuoteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
