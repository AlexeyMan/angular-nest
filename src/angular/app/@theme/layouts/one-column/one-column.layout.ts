import { Component } from '@angular/core';

@Component({
  selector: 'ngx-one-column-layout',
  styleUrls: ['./one-column.layout.scss'],
  template: `
    <nb-layout>
      <nb-layout-header fixed>
        <ngx-header><nb-toggle labelPosition="start" (checkedChange)="checkSwich(swichMenu)" [(checked)]="swichMenu">Положение меню</nb-toggle></ngx-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" state="compacted" [right]="swichMenu">
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
})
export class OneColumnLayoutComponent {
  swichMenu = true;
  position = localStorage.getItem("swichMenu");
  ngOnInit(){
    if(this.position){
      this.swichMenu = (this.position === 'true');
    }
  }
  checkSwich(el){
    localStorage.setItem("swichMenu", (!el).toString());
  }
}
