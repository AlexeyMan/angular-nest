import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { EntryComponent } from './entry.component';
// import { MainComponent } from './main/main.component';
// import { TariffComponent } from './tariff/tariff.component';

const routes: Routes = [{
  path: '',
  component: EntryComponent,
  children: [
    // {
    //   path: 'main',
    //   component: MainComponent,
    // },
    // {
    //   path: 'tariff',
    //   component: TariffComponent,
    // },
    // {
    //   path: '',
    //   redirectTo: 'main',
    //   pathMatch: 'full',
    // },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
