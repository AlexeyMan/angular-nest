import { NgModule } from '@angular/core';
import { NbAutocompleteModule, NbButtonModule, NbCardModule, NbMenuModule, NbStepperComponent, NbStepperModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { MainModule } from './main/main.module';

import { PagesRoutingModule } from './pages-routing.module';
import { TariffModule } from './tariff/tariff.module';
import { EntryComponent } from './entry/entry.component';
import { StepperComponent } from './entry/stepper/stepper.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonService } from '../_services/common.service';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    MainModule,
    TariffModule,
    NbCardModule,
    NbStepperModule,
    FormsModule,
    ReactiveFormsModule,
    NbAutocompleteModule,
    HttpClientModule,
    NbButtonModule,
  ],
  declarations: [
    PagesComponent,
    EntryComponent,
    StepperComponent,
  ],
  providers: [
    CommonService 
  ]
})
export class PagesModule {
}
