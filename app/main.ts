import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';

import { BookDataService } from './book-data.service';
import { AppComponent } from './app.component';
import { BooksComponent } from './books.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent
  ],
  imports: [ BrowserModule, FormsModule, HttpModule ],
  bootstrap: [ AppComponent ],
  providers: [ BookDataService ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);


