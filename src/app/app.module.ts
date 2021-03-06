import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';

import { GlossaryDirective } from './shared/glossary.directive';
import { GlossaryOptionsDirective } from './shared/glossary-options.directive';
import { BookComponent } from './book/book.component';
import { FirebaseGlossaryComponent } from './firebase-glossary/firebase-glossary.component';
import { PageComponent } from './book/page/page.component';
import { Page2Component } from './book/page2/page2.component';

@NgModule({
  declarations: [
    AppComponent,
    GlossaryDirective,
    GlossaryOptionsDirective,
    BookComponent,
    FirebaseGlossaryComponent,
    PageComponent,
    Page2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
