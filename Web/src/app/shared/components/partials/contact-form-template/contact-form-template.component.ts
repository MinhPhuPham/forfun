import { Component, OnInit, ChangeDetectionStrategy, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-form-template',
  templateUrl: './contact-form-template.component.html',
  styleUrls: ['./contact-form-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactFormTemplateComponent implements OnInit {

  @ViewChild('contentDescription', { static: true }) contentDescription: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

}
