import { NgModule } from '@angular/core';
import { NbCardModule, NbCheckboxModule, NbIconModule, NbInputModule, NbRadioModule } from '@nebular/theme';
import { FormsModule }   from '@angular/forms';

import { ThemeModule } from '../../@theme/theme.module';
import { MainComponent } from './main.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbIconModule,
    FormsModule,
    ReactiveFormsModule,
    NbInputModule,
    NbRadioModule,
    NbCheckboxModule,
  ],
  declarations: [
    MainComponent,
  ],
})
export class MainModule { }
