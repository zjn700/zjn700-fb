import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { GlossaryDirective } from './shared/glossary.directive';
import { GlossaryOptionsDirective } from './shared/glossary-options.directive';

@NgModule({
  declarations: [
    AppComponent,
    GlossaryDirective,
    GlossaryOptionsDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
