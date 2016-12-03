import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { BooksComponent } from './books.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent
  ],
  imports: [ BrowserModule, FormsModule ],
  bootstrap: [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);


