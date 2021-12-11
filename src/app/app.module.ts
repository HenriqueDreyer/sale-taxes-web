import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaleTaxesModule } from './sale-taxes/sale-taxes.module';
import { SaleTaxesComponent } from './sale-taxes/view/sale-taxes.component';

@NgModule({
  declarations: [
    AppComponent,
    SaleTaxesComponent
  ],
  exports: [ ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SaleTaxesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
