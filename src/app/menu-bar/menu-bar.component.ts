import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { MAP_MENU_WIDTH } from '../app.constants';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        left: '0px',
      })),
      state('closed', style({
        left: '-'+MAP_MENU_WIDTH+'px',
      })),
      transition('open => closed', [
        animate('250ms cubic-bezier(0.35, 0, 0.25, 1)')
      ]),
      transition('closed => open', [
        animate('250ms cubic-bezier(0.35, 0, 0.25, 1)')
      ]),
    ]),
  ],
})
export class MenuBarComponent implements OnInit {

  @Input()
  public isOpen = true;

  constructor() { }

  ngOnInit(): void {
  }

  public toggle() {
    this.isOpen = !this.isOpen;
  }

}
