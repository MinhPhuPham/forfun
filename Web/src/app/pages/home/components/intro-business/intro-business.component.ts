import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-intro-business',
  templateUrl: './intro-business.component.html',
  styleUrls: ['./intro-business.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroBusinessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  propertyButton = {
    text: 'explore our guarantees',
    link: '',
    class: 'yellow text-white'
  }

}
