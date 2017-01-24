import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import './rxjs-extensions';

import { ArtistService } from '../services/artist.service';

import { AppComponent } from './app.component';
import { ArtistComponent } from '../artist/artist.component';
import { ArtistDetailComponent } from '../artist-detail/artist-detail.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ArtistSearchComponent } from '../artist-search/artist-search.component';

import { AppRoutingModule }     from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryArtistDataService } from '../services/in-memory-artist-data-service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryArtistDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ArtistComponent,
    ArtistDetailComponent,
    PortfolioComponent,
    ArtistSearchComponent
  ],
  providers: [
    ArtistService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }



