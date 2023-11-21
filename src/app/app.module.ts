import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FocusedComponent } from './focused/focused.component';
import {DxDataGridModule} from "devextreme-angular";

@NgModule({
  declarations: [
    AppComponent,
    FocusedComponent
  ],
  imports: [
    BrowserModule,
    DxDataGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
