import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JavascriptCodingComponent } from './javascript-coding/javascript-coding.component';
import { ModernOperatorsComponent } from './modern-operators/modern-operators.component';
import { MapsSetsComponent } from './modern-operators/maps-sets-coding/maps-sets/maps-sets.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent,JavascriptCodingComponent,ModernOperatorsComponent,MapsSetsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
