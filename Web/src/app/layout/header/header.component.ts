import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SIDEBAR_MENU } from 'src/app/shared';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {

  menuState:string = 'out';
  sideBarMenuData = SIDEBAR_MENU;
  activeSideId = '';

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(){
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

  closeMenu() {
    this.menuState = 'out'
  }

  changeActiveSideMenu($event) {
    const { panelId, nextState } = $event;
    this.activeSideId = panelId && nextState ? panelId : '';
  }

}
