import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AnnunciCompComponent } from './annunci-comp/annunci-comp.component';
import { CommentCompComponent } from './comment-comp/comment-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnunciCompComponent,
    CommentCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
