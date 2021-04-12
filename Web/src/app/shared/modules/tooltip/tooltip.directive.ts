import {
  Directive,
  Injector,
  Input,
  ViewChild,
  HostListener,
  ComponentFactoryResolver,
  ApplicationRef,
  ElementRef,
  TemplateRef,
  ComponentRef,
  ViewContainerRef,
  EmbeddedViewRef,
  ChangeDetectorRef,
} from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Destroyable } from '../../utils';

import { TooltipComponent } from './tooltip.component';

@Directive({
  selector: '[appTooltip]',
})
export class TooltipDirective extends Destroyable {
  public showTooltip$ = new BehaviorSubject<boolean>(false);
  private componentRef: ComponentRef<any>;

  @Input() position = 'top';
  @Input() appTooltip: TemplateRef<any> | string;
  @Input() offset: number = 10;

  @ViewChild(TemplateRef, { read: ViewContainerRef }) viewContainer: ViewContainerRef;

  @HostListener('mouseenter')
  showTooltip() { this.createToolTip() }

  @HostListener('mouseleave')
  hideTooltip() { this.destroyToolTip() }

  constructor(
    private elementRef: ElementRef,
    private appRef: ApplicationRef,
    private injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    super();
  }

  createToolTip() {
    this.destroyToolTip();

    this.componentRef = this.componentFactoryResolver
      .resolveComponentFactory(TooltipComponent)
      .create(this.injector);

    this.componentRef.instance.tooltipTemplate = this.appTooltip;
    this.componentRef.instance.callerInstance = this.elementRef.nativeElement;
    this.componentRef.instance.positionType = this.position;
    
    this.componentRef.changeDetectorRef.detectChanges();

    this.appRef.attachView(this.componentRef.hostView);

    const domElem: HTMLElement = (this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0];
    document.body.appendChild(domElem);

    const componentWidth = this.componentRef.instance.el.nativeElement.offsetWidth || this.componentRef.instance.el.nativeElement.clientWidth;
    const componentHeight = this.componentRef.instance.el.nativeElement.offsetHeight || this.componentRef.instance.el.nativeElement.clientHeight;

    const { top, left } = this.setPosition(componentWidth, componentHeight);
    
    this.componentRef.instance.top = top;
    this.componentRef.instance.left = left;
  }

  destroyToolTip() {
    if (this.componentRef) this.componentRef.destroy();
  }

  setPosition(componentWidth: number, componentHeight: number) {
    const tooltipPos = this.elementRef.nativeElement.getBoundingClientRect();
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    let caculator = {
      top: 0,
      left: 0
    };

    if (this.position === 'top') {
      caculator.top = tooltipPos.top - this.offset - componentHeight;
      caculator.left = tooltipPos.left + (tooltipPos.width / 2) - (componentWidth / 2);
    }

    if (this.position === 'bottom') {
      caculator.top = tooltipPos.bottom + this.offset;
      caculator.left = tooltipPos.left + (tooltipPos.width - tooltipPos.width) / 2;
    }

    if (this.position === 'left') {
      caculator.top = tooltipPos.top + (tooltipPos.height) / 2;
      caculator.left = tooltipPos.left - tooltipPos.width - this.offset;
    }

    if (this.position === 'right') {
      caculator.top = tooltipPos.top + (tooltipPos.height) / 2;
      caculator.left = tooltipPos.right + this.offset;
    }

    // still have case componentHeight overload height of body => fix later

    caculator.top = caculator.top + scrollPos;

    return caculator;
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
    this.destroyToolTip();
  }
}