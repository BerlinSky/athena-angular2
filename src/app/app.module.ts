import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { ArtistComponent } from '../artist/artist.component'
import { ArtistDetailComponent } from '../artist-detail/artist-detail.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ArtistComponent,
    ArtistDetailComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }



