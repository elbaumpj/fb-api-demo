import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoButtonsComponent } from './demo-buttons/demo-buttons.component';
import { FacebookServiceService } from './facebook-service.service';

@NgModule({
  declarations: [
    AppComponent,
    DemoButtonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    FacebookServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
