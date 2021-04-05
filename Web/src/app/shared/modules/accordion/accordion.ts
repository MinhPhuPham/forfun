import {
    AfterContentChecked,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    Directive,
    ElementRef,
    EventEmitter,
    Host,
    Input,
    Optional,
    Output,
    QueryList,
    TemplateRef,
    ViewEncapsulation,
    NgZone,
} from '@angular/core';

import { NgbAccordionConfig } from './accordion-config';
import { take } from 'rxjs/operators';
import { ngbRunTransition, ngbCollapsingTransition } from '../../utils';

let nextId = 0;

export interface NgbPanelHeaderContext {
    opened: boolean;
}

@Directive({ selector: 'ng-template[ngbPanelHeader]' })
export class NgbPanelHeader {
    constructor(public templateRef: TemplateRef<any>) { }
}

@Directive({ selector: 'ng-template[ngbPanelTitle]' })
export class NgbPanelTitle {
    constructor(public templateRef: TemplateRef<any>) { }
}

@Directive({ selector: 'ng-template[ngbPanelContent]' })
export class NgbPanelContent {
    constructor(public templateRef: TemplateRef<any>) { }
}

@Directive({ selector: 'ngb-panel' })
export class NgbPanel implements AfterContentChecked {
    @Input() disabled = false;

    @Input() id = `ngb-panel-${nextId++}`;

    isOpen = false;

    /* A flag to specified that the transition panel classes have been initialized */
    initClassDone = false;

    /* A flag to specified if the panel is currently being animated, to ensure its presence in the dom */
    transitionRunning = false;

    @Input() title: string;

    @Input() type: string;

    @Input() cardClass: string;

    @Output() shown = new EventEmitter<void>();

    @Output() hidden = new EventEmitter<void>();


    titleTpl: NgbPanelTitle;
    headerTpl: NgbPanelHeader;
    contentTpl: NgbPanelContent;

    @ContentChildren(NgbPanelTitle, { descendants: false }) titleTpls: QueryList<NgbPanelTitle>;
    @ContentChildren(NgbPanelHeader, { descendants: false }) headerTpls: QueryList<NgbPanelHeader>;
    @ContentChildren(NgbPanelContent, { descendants: false }) contentTpls: QueryList<NgbPanelContent>;

    ngAfterContentChecked() {
        this.titleTpl = this.titleTpls.first;
        this.headerTpl = this.headerTpls.first;
        this.contentTpl = this.contentTpls.first;
    }
}

export interface NgbPanelChangeEvent {
    panelId: string;

    nextState: boolean;

    preventDefault: () => void;
}

@Component({
    selector: 'ngb-accordion',
    exportAs: 'ngbAccordion',
    encapsulation: ViewEncapsulation.None,
    host: { 'class': 'accordion', 'role': 'tablist', '[attr.aria-multiselectable]': '!closeOtherPanels' },
    template: `
      <ng-template #t ngbPanelHeader let-panel>
        <button class="btn btn-link" [ngbPanelToggle]="panel">
          {{panel.title}}<ng-template [ngTemplateOutlet]="panel.titleTpl?.templateRef"></ng-template>
        </button>
      </ng-template>
      <ng-template ngFor let-panel [ngForOf]="panels">
        <div [class]="'card ' + (panel.cardClass || '')">
          <div role="tab" id="{{panel.id}}-header" [class]="'card-header ' + (panel.type ? 'bg-'+panel.type: type ? 'bg-'+type : '')">
            <ng-template [ngTemplateOutlet]="panel.headerTpl?.templateRef || t"
                         [ngTemplateOutletContext]="{$implicit: panel, opened: panel.isOpen}"></ng-template>
          </div>
          <div id="{{panel.id}}" role="tabpanel" [attr.aria-labelledby]="panel.id + '-header'"
               *ngIf="!destroyOnHide || panel.isOpen || panel.transitionRunning">
            <div class="card-body">
                 <ng-template [ngTemplateOutlet]="panel.contentTpl?.templateRef || null"></ng-template>
            </div>
          </div>
        </div>
      </ng-template>
    `
})
export class NgbAccordion implements AfterContentChecked {
    @ContentChildren(NgbPanel) panels: QueryList<NgbPanel>;

    @Input() animation;

    @Input() activeIds: string | readonly string[] = [];

    @Input('closeOthers') closeOtherPanels: boolean;

    @Input() destroyOnHide = true;

    @Input() type: string;

    @Output() panelChange = new EventEmitter<NgbPanelChangeEvent>();

    @Output() shown = new EventEmitter<string>();

    @Output() hidden = new EventEmitter<string>();

    constructor(
        config: NgbAccordionConfig, private _element: ElementRef, private _ngZone: NgZone,
        private _changeDetector: ChangeDetectorRef) {
        this.animation = config.animation;
        this.type = config.type;
        this.closeOtherPanels = config.closeOthers;
    }

    isExpanded(panelId: string): boolean { return this.activeIds.indexOf(panelId) > -1; }

    expand(panelId: string): void { this._changeOpenState(this._findPanelById(panelId), true); }

    expandAll(): void {
        if (this.closeOtherPanels) {
            if (this.activeIds.length === 0 && this.panels.length) {
                this._changeOpenState(this.panels.first, true);
            }
        } else {
            this.panels.forEach(panel => this._changeOpenState(panel, true));
        }
    }

    collapse(panelId: string) { this._changeOpenState(this._findPanelById(panelId), false); }

    collapseAll() {
        this.panels.forEach((panel) => { this._changeOpenState(panel, false); });
    }

    toggle(panelId: string) {
        const panel = this._findPanelById(panelId);
        if (panel) {
            this._changeOpenState(panel, !panel.isOpen);
        }
    }

    ngAfterContentChecked() {
        // active id updates
        if (typeof this.activeIds === 'string') {
            this.activeIds = this.activeIds.split(/\s*,\s*/);
        }

        // update panels open states
        this.panels.forEach(panel => { panel.isOpen = !panel.disabled && this.activeIds.indexOf(panel.id) > -1; });

        // closeOthers updates
        if (this.activeIds.length > 1 && this.closeOtherPanels) {
            this._closeOthers(this.activeIds[0], false);
            this._updateActiveIds();
        }

        // Setup the initial classes here
        this._ngZone.onStable.pipe(take(1)).subscribe(() => {
            this.panels.forEach(panel => {
                const panelElement = this._getPanelElement(panel.id);
                if (panelElement) {
                    if (!panel.initClassDone) {
                        panel.initClassDone = true;
                        ngbRunTransition(this._ngZone, panelElement, ngbCollapsingTransition, {
                            animation: false,
                            runningTransition: 'continue',
                            context: { direction: panel.isOpen ? 'show' : 'hide' }
                        });
                    }
                } else {
                    // Classes must be initialized next time it will be in the dom
                    panel.initClassDone = false;
                }
            });
        });
    }

    private _changeOpenState(panel: NgbPanel | null, nextState: boolean) {
        if (panel != null && !panel.disabled && panel.isOpen !== nextState) {
            let defaultPrevented = false;

            this.panelChange.emit(
                { panelId: panel.id, nextState: nextState, preventDefault: () => { defaultPrevented = true; } });

            if (!defaultPrevented) {
                panel.isOpen = nextState;
                panel.transitionRunning = true;

                if (nextState && this.closeOtherPanels) {
                    this._closeOthers(panel.id);
                }
                this._updateActiveIds();
                this._runTransitions(this.animation);
            }
        }
    }

    private _closeOthers(panelId: string, enableTransition = true) {
        this.panels.forEach(panel => {
            if (panel.id !== panelId && panel.isOpen) {
                panel.isOpen = false;
                panel.transitionRunning = enableTransition;
            }
        });
    }

    private _findPanelById(panelId: string): NgbPanel | null { return this.panels.find(p => p.id === panelId) || null; }

    private _updateActiveIds() {
        this.activeIds = this.panels.filter(panel => panel.isOpen && !panel.disabled).map(panel => panel.id);
    }

    private _runTransitions(animation: boolean) {
        // detectChanges is performed to ensure that all panels are in the dom (via transitionRunning = true)
        // before starting the animation
        this._changeDetector.detectChanges();

        this.panels.forEach(panel => {
            // When panel.transitionRunning is true, the transition needs to be started OR reversed,
            // The direction (show or hide) is choosen by each panel.isOpen state
            if (panel.transitionRunning) {
                const panelElement = this._getPanelElement(panel.id);
                ngbRunTransition(this._ngZone, panelElement!, ngbCollapsingTransition, {
                    animation,
                    runningTransition: 'stop',
                    context: { direction: panel.isOpen ? 'show' : 'hide' }
                }).subscribe(() => {
                    panel.transitionRunning = false;
                    const { id } = panel;
                    if (panel.isOpen) {
                        panel.shown.emit();
                        this.shown.emit(id);
                    } else {
                        panel.hidden.emit();
                        this.hidden.emit(id);
                    }
                });
            }
        });
    }

    private _getPanelElement(panelId: string): HTMLElement | null {
        return this._element.nativeElement.querySelector('#' + panelId);
    }
}

@Directive({
    selector: '[ngbPanelToggle]',
    host: {
        '[disabled]': 'panel.disabled',
        '[class.collapsed]': '!panel.isOpen',
        '[attr.aria-expanded]': 'panel.isOpen',
        '[attr.aria-controls]': 'panel.id',
        '(click)': 'accordion.toggle(panel.id)'
    }
})
export class NgbPanelToggle {
    static ngAcceptInputType_ngbPanelToggle: NgbPanel | '';

    @Input()
    set ngbPanelToggle(panel: NgbPanel) {
        if (panel) {
            this.panel = panel;
        }
    }

    constructor(public accordion: NgbAccordion, @Optional() @Host() public panel: NgbPanel) { }
}