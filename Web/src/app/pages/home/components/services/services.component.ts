import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  propertyButton = {
    text: 'explore our guarantees',
    link: '',
    class: 'yellow text-white'
  }

}