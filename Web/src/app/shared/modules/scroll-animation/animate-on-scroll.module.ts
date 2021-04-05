import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from './animate-on-scroll.directive';
import { ScrollService } from './scroll.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AnimateOnScrollDirective
    ],
    exports: [
        AnimateOnScrollDirective
    ]
})
export class AnimateOnScrollModule {
    static forRoot(): ModuleWithProviders<AnimateOnScrollModule> {
        return {
            ngModule: AnimateOnScrollModule,
            providers: [ScrollService]
        };
    }
}

// example right here: https://stackblitz.com/edit/withanimate?file=src%2Fapp%2Fanimate.css