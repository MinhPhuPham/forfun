import { CommonModule } from "@angular/common";
import { Directive, ElementRef, HostListener, Input, NgModule } from "@angular/core";

@Directive({
  selector: "[tabsScrollable]",
  exportAs: "tabsScrollable"
})
export class ScrollableControlDirective {
  constructor(private elementRef: ElementRef) {}

  @Input() scrollUnit: number;

  private longScroll: number

  private get element() {
    return this.elementRef.nativeElement;
  }

  get isOverflow() {
    return this.element.scrollWidth > this.element.clientWidth;
  }

  scroll(direction: string) {
    const convertDirection  = direction === 'left' ? 1 : -1;

    let scrollUnit = this.scrollUnit;
    if (!scrollUnit) {
        scrollUnit = this.element.clientWidth;
    }
    this.longScroll = this.element.scrollLeft + (scrollUnit * convertDirection)
    this.element.scrollTo({ left: this.longScroll, behavior: 'smooth' });
  }

  get canScrollStart() {
    return this.longScroll >= 0.5;
  }

  get canScrollEnd() {
    return this.longScroll != this.element.scrollWidth;
  }

  @HostListener("window:resize")
  onWindowResize() {} // required for update view when windows resized
}

@NgModule({ declarations: [ScrollableControlDirective], exports: [ScrollableControlDirective], imports: [CommonModule] })
export class SrcollableControlModule {}