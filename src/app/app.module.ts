import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { ArtistService } from '../services/artist.service';

import { AppComponent } from './app.component';
import { ArtistComponent } from '../artist/artist.component';
import { ArtistDetailComponent } from '../artist-detail/artist-detail.component';
import { PortfolioComponent } from '../portfolio/Portfolio.component';
import { Page404Component } from '../page404/Page404.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ArtistComponent,
    ArtistDetailComponent,
    PortfolioComponent,
    Page404Component
  ],
  providers: [
    ArtistService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }



