import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BaseUrlModule, BASE_URL } from '@mintplayer/ng-base-url';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BaseUrlModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
