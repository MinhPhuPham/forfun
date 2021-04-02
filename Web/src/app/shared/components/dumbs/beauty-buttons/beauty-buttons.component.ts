import { Component, Input, OnInit } from '@angular/core';
import { ButtonConfigs } from 'src/app/shared/models';

@Component({
  selector: 'app-beauty-buttons',
  template: `
    <a [attr.href]="buttonConfigs.link" [ngClass]="buttonConfigs.class" class="btn yellow">{{ buttonConfigs.text || ''}}</a>
  `,
  styleUrls: ['./beauty-buttons.component.scss']
})
export class BeautyButtonsComponent implements OnInit {

  constructor() { }

  @Input() buttonConfigs: ButtonConfigs = {};

  ngOnInit(): void {
  }

}
