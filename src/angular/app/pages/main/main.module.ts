import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { MainComponent } from './main.component';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbIconModule,
  ],
  declarations: [
    MainComponent,
  ],
})
export class MainModule { }
