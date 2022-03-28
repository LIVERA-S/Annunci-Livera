import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AnnunciCompComponent } from './annunci-comp/annunci-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnunciCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
