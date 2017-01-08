import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ArtistsComponent } from './artists.component';
import { ArtistDetailComponent } from './artist-detail.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'artists',
        component: ArtistsComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    ArtistsComponent,
    ArtistDetailComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
