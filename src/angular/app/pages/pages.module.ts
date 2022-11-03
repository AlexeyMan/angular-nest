import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { MainModule } from './main/main.module';

import { PagesRoutingModule } from './pages-routing.module';
import { TariffModule } from './tariff/tariff.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    MainModule,
    TariffModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
