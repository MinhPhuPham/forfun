import {Injectable} from '@angular/core';
@Injectable({providedIn: 'root'})
export class NgbCarouselConfig {
  interval = 5000;
  wrap = true;
  keyboard = true;
  pauseOnHover = true;
  pauseOnFocus = true;
  showNavigationArrows = true;
  showNavigationIndicators = true;

  private _animation: boolean;

  constructor() {}

  get animation(): boolean { return (this._animation === undefined) ? true : this._animation; }
  set animation(animation: boolean) { this._animation = animation; }
}