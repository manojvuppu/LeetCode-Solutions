import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JavascriptCodingComponent } from './javascript-coding/javascript-coding.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent,JavascriptCodingComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
