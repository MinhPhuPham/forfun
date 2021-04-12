import { Directive, ElementRef, Renderer2, Input, Inject, PLATFORM_ID, OnInit, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
    selector: '[lazyImage]'
})
export class LazyImageIntersectionDirective implements OnInit, OnDestroy {
    // private readonly callbacks = new Map<Element, IntersectionObserverCallback>();
    private observer: IntersectionObserver;

    @Input() lazyImage: string | undefined;
    @Input() isBackGroundImage: boolean = false;

    private options: IntersectionObserverInit = {
        rootMargin: '15px 0px',
        threshold: 1
    }

    constructor(private el: ElementRef,
        @Inject(PLATFORM_ID) private platformId: any,
        public renderer: Renderer2) { }

    ngOnInit(): void {
        if (!this.isBrowser()) {
            return;
        }

        this.intersectionObserver();
    }

    private intersectionObserver(): void {
        this.observer = new IntersectionObserver(this.callback, this.options);
        this.observer.observe(this.el.nativeElement);
    }

    private callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
            if (entry.isIntersecting && this.lazyImage) {
                const target = entry.target as HTMLImageElement;

                if (this.isBackGroundImage) {
                    this.renderer.setStyle(entry.target, 'background-image', `url(${this.lazyImage})`);
                    observer.unobserve(entry.target);

                    return;
                }

                target.src = this.lazyImage;
                observer.unobserve(entry.target);
            }
        })
    }

    isBrowser(): boolean {
        return isPlatformBrowser(this.platformId);
    }

    ngOnDestroy(): void {
        this.observer?.disconnect();
        this.observer = null;
    }
}
