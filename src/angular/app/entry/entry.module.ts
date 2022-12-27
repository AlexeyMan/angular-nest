import { NgModule } from '@angular/core';
import { EntryComponent } from './entry.component';
import { ThemeModule } from '../@theme/theme.module';
import { NbActionsModule, NbCardModule, NbIconModule, NbSelectModule } from '@nebular/theme';
import { PagesRoutingModule } from '../pages/pages-routing.module';

@NgModule({
  declarations: [EntryComponent],
  imports: [
    ThemeModule,
    NbCardModule,
    PagesRoutingModule,
    NbIconModule,
    NbSelectModule,
    NbActionsModule
  ]
})
export class EntryModule { }
