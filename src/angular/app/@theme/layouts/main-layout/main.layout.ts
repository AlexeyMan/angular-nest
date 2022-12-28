import { Component, OnInit } from '@angular/core';
import { NbSidebarService, NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-main-layout',
  styleUrls: ['./main.layout.scss'],
  template: `
    <nb-layout>
      <!-- <nb-layout-header fixed>
        <ngx-header></ngx-header>
      </nb-layout-header> -->

      <nb-sidebar state="compacted" right class="menu-sidebar" tag="menu-sidebar">
        <div class="row" style="justify-content: flex-start">
          <a (click)="toggleSidebar()" style="width: 100%;" href="#" class="sidebar-toggle">
            <nb-icon style="fontSize: 40px; margin-bottom: 34px; margin-left: 1px" icon="menu-2-outline"></nb-icon>
          </a>
        </div>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
    </nb-layout>
  `
})
export class MainLayoutComponent implements OnInit {
  constructor(
    private themeService: NbThemeService,
    private sidebarService: NbSidebarService,
  ) {}
  ngOnInit(): void {
    const theme = localStorage.getItem('colorTheme');
    if (theme) {
      this.themeService.changeTheme(theme);
    }
  }
  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }
}
