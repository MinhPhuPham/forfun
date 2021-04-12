
import { Component, OnInit, Input, HostBinding, TemplateRef, ChangeDetectionStrategy, OnDestroy, ElementRef, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  template: `
  <ng-container *ngTemplateOutlet="tooltipTemplate"></ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent implements OnInit, OnDestroy {

  @HostBinding('class.position-absolute') showToggle: boolean;

  constructor(private el: ElementRef, private changeRef: ChangeDetectorRef) { }

  @Input() positionType: string;
  @Input() callerInstance: HTMLElement;
  @Input() top: number;
  @Input() left: number;
  @Input() public tooltipTemplate: TemplateRef<any>;

  @HostBinding('class') classAttribute: string;

  @HostBinding('style.top.px')
  get topFix(): number {
    return this.top;
  }

  @HostBinding('style.left.px')
  get leftFix(): number {
    return this.left;
  }

  ngOnInit() {
    this.classAttribute = 'clock-tooltip'+ ' ' + `clock-tooltip-${this.positionType}`
  }

  ngOnDestroy() {
  }

}
