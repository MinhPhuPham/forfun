import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class NgbAccordionConfig {
  closeOthers = false;
  type: string;

  private _animation: boolean;

  get animation(): boolean { return (this._animation === undefined) ? true : this._animation; }
  set animation(animation: boolean) { this._animation = animation; }
}