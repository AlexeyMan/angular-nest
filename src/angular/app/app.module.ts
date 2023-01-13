/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbButtonModule,
  NbCardModule,
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbInputModule,
  NbMenuModule,
  NbSidebarModule,
  NbStepperModule,
  NbToastrModule,
  NbTooltipModule,
  NbWindowModule,
  NbAutocompleteModule,
} from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommercialComponent } from './pages/commercial/commercial.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [AppComponent, CommercialComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbCardModule,
    NbStepperModule,
    FormsModule,
    ReactiveFormsModule,
    NbButtonModule,
    NbTooltipModule,
    NbInputModule,
    NbAutocompleteModule,
    SwiperModule,
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
