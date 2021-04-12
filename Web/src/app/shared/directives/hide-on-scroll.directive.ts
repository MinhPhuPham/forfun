import { Directive, ElementRef, AfterViewInit, Inject, PLATFORM_ID, OnDestroy, Input, NgModule } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import {
    distinctUntilChanged,
    filter,
    map,
    pairwise,
    share,
    takeUntil,
    throttleTime
} from 'rxjs/operators';
import { isPlatformServer } from '@angular/common';

@Directive({
    selector: '[hideOnScroll]'
})
export class HideOnScrollDirective implements AfterViewInit, OnDestroy {
    @Input() hideOnScroll: 'Down' | 'Up' = 'Down';
    @Input() propertyUsedToHide: 'top' | 'bottom' | 'height' = 'top';
    @Input() valueWhenHidden: string = '-100px';
    @Input() valueWhenShown: string = '0px';
    @Input() scrollingElementSelector: string = '';

    private unsubscribeNotifier = new Subject();

    constructor(
        private elementRef: ElementRef<HTMLElement>,
        @Inject(PLATFORM_ID) private platformId: string
    ) { }

    ngAfterViewInit() {
        if (isPlatformServer(this.platformId)) {
            return;
        }

        let elementToListenScrollEvent;
        let scrollingElement: HTMLElement;
        if (!this.scrollingElementSelector) {
            elementToListenScrollEvent = window;
            scrollingElement = this.getDefaultScrollingElement();
        } else {
            scrollingElement = document.querySelector(this.scrollingElementSelector) as HTMLElement;
            if (!scrollingElement) {
                console.error(`hideOnScroll: @Input() scrollingElementSelector\nElement with selector: "${this.scrollingElementSelector}" not found.`);
                return;
            }
            elementToListenScrollEvent = scrollingElement;
        }

        const scroll$ = fromEvent(elementToListenScrollEvent, 'scroll').pipe(
            takeUntil(this.unsubscribeNotifier),
            throttleTime(50), // only emit every 50 ms
            map(() => scrollingElement.scrollTop), // get vertical scroll position
            pairwise(),  // look at this and the last emitted element
            // compare this and the last element to figure out scrolling direction
            map(([y1, y2]): ScrollDirection => (y2 < y1 ? ScrollDirection.Up : ScrollDirection.Down)),
            distinctUntilChanged(), // only emit when scrolling direction changed
            share() // share a single subscription to the underlying sequence in case of multiple subscribers
        );

        const scrollUp$ = scroll$.pipe(
            filter(direction => direction === ScrollDirection.Up)
        );

        const scrollDown$ = scroll$.pipe(
            filter(direction => direction === ScrollDirection.Down)
        );

        let scrollUpAction: () => void;
        let scrollDownAction: () => void;
        if (this.hideOnScroll === 'Up') {
            scrollUpAction = () => this.hideElement();
            scrollDownAction = () => this.showElement();
        } else {
            scrollUpAction = () => this.showElement();
            scrollDownAction = () => this.hideElement();
        }

        scrollUp$.subscribe(() => scrollUpAction());
        scrollDown$.subscribe(() => scrollDownAction());
    }

    ngOnDestroy(): void {
        this.unsubscribeNotifier.next();
        this.unsubscribeNotifier.complete();
    }

    private hideElement() {
        this.elementRef.nativeElement.style[this.propertyUsedToHide] = this.valueWhenHidden;
    }

    private showElement() {
        this.elementRef.nativeElement.style[this.propertyUsedToHide] = this.valueWhenShown;
    }

    private getDefaultScrollingElement() {
        return (document.scrollingElement || document.documentElement) as HTMLElement;
    }
}

enum ScrollDirection {
    Up = 'Up',
    Down = 'Down'
}

@NgModule({
    declarations: [HideOnScrollDirective],
    exports: [HideOnScrollDirective]
})
export class HideOnScrollModule { }