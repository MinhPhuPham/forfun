import { NgZone } from '@angular/core';
import { EMPTY, fromEvent, Observable, of, OperatorFunction, race, Subject, timer } from 'rxjs';
import { endWith, filter, takeUntil } from 'rxjs/operators';

export function runInZone<T>(zone: NgZone): OperatorFunction<T, T> {
    return (source) => {
        return new Observable(observer => {
            const onNext = (value: T) => zone.run(() => observer.next(value));
            const onError = (e: any) => zone.run(() => observer.error(e));
            const onComplete = () => zone.run(() => observer.complete());
            return source.subscribe(onNext, onError, onComplete);
        });
    };
}

export function getTransitionDurationMs(element: HTMLElement) {
    const { transitionDelay, transitionDuration } = window.getComputedStyle(element);
    const transitionDelaySec = parseFloat(transitionDelay);
    const transitionDurationSec = parseFloat(transitionDuration);

    return (transitionDelaySec + transitionDurationSec) * 1000;
}

export type NgbTransitionStartFn<T = any> = (element: HTMLElement, animation: boolean, context: T) =>
    NgbTransitionEndFn | void;
export type NgbTransitionEndFn = () => void;

export interface NgbTransitionOptions<T> {
    animation: boolean;
    runningTransition: 'continue' | 'stop';
    context?: T;
}

export interface NgbTransitionCtx<T> {
    transition$: Subject<any>;
    complete: () => void;
    context: T;
}

const noopFn: NgbTransitionEndFn = () => { };

const transitionTimerDelayMs = 5;
const runningTransitions = new Map<HTMLElement, NgbTransitionCtx<any>>();

export const ngbRunTransition =
    <T>(zone: NgZone, element: HTMLElement, startFn: NgbTransitionStartFn<T>, options: NgbTransitionOptions<T>):
        Observable<undefined> => {

        // Getting initial context from options
        let context = options.context || <T>{};

        // Checking if there are already running transitions on the given element.
        const running = runningTransitions.get(element);
        if (running) {
            switch (options.runningTransition) {
                case 'continue':
                    return EMPTY;
                case 'stop':
                    zone.run(() => running.transition$.complete());
                    context = Object.assign(running.context, context);
                    runningTransitions.delete(element);
            }
        }

        const endFn = startFn(element, options.animation, context) || noopFn;
        if (!options.animation || window.getComputedStyle(element).transitionProperty === 'none') {
            zone.run(() => endFn());
            return of(undefined).pipe(runInZone(zone));
        }

        // Starting a new transition
        const transition$ = new Subject<any>();
        const finishTransition$ = new Subject<any>();
        const stop$ = transition$.pipe(endWith(true));
        runningTransitions.set(element, {
            transition$,
            complete: () => {
                finishTransition$.next();
                finishTransition$.complete();
            },
            context
        });

        const transitionDurationMs = getTransitionDurationMs(element);
        zone.runOutsideAngular(() => {
            const transitionEnd$ =
                fromEvent(element, 'transitionend').pipe(takeUntil(stop$), filter(({ target }) => target === element));
            const timer$ = timer(transitionDurationMs + transitionTimerDelayMs).pipe(takeUntil(stop$));

            race(timer$, transitionEnd$, finishTransition$).pipe(takeUntil(stop$)).subscribe(() => {
                runningTransitions.delete(element);
                zone.run(() => {
                    endFn();
                    transition$.next();
                    transition$.complete();
                });
            });
        });

        return transition$.asObservable();
    };

export const ngbCompleteTransition = (element: HTMLElement) => {
    runningTransitions.get(element)?.complete();
};