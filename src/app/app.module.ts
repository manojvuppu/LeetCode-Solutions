import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JavascriptCodingComponent } from './javascript-coding/javascript-coding.component';
import { ModernOperatorsComponent } from './modern-operators/modern-operators.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent,JavascriptCodingComponent,ModernOperatorsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
