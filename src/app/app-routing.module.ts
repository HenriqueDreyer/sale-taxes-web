import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleTaxesComponent } from './sale-taxes/view/sale-taxes.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
