import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PotsListComponent } from './compoments/pots-list/pots-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PotsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule // since la version Angular 4.3
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
