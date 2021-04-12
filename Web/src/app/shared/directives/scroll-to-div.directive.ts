import { Directive, HostListener, Input, NgModule } from '@angular/core';

@Directive({
    selector: '[scrollToDiv]'
})
export class ScrollToDivDirective {

    @Input('scrollToDiv') idElementScroll: string;

    @HostListener('click', ['$event.target'])
    onClick(target: HTMLElement) {
        const element = document.getElementById(this.idElementScroll)
        element && element.scrollIntoView({ behavior: 'smooth', block: "start", inline: "start" });
    }
}

@NgModule({
    declarations: [ScrollToDivDirective],
    exports: [ScrollToDivDirective]
})
export class ScrollToDivModule { }