import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbDialogModule, NbIconModule, NbInputModule, NbRadioModule, NbTimepickerModule, NbTooltipModule, NbWindowModule } from '@nebular/theme';
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
    NbDatepickerModule,
    NbTimepickerModule,
    NbButtonModule,
    NbTooltipModule,
    NbWindowModule,
    NbDialogModule,
  ],
  declarations: [
    MainComponent,
  ],
})
export class MainModule { }
