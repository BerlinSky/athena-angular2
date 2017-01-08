import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ArtistService } from './artist.service';

import { AppComponent } from './app.component';
import { ArtistsComponent } from './artists.component';
import { ArtistDetailComponent } from './artist-detail.component';
import { PortfolioComponent } from './portfolio.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'artists',
        component: ArtistsComponent
      },
      {
        path: 'portfolio',
        component: PortfolioComponent
      },
      {
        path: '',
        redirectTo: '/portfolio',
        pathMatch: 'full'
      },
    ])
  ],
  declarations: [
    AppComponent,
    ArtistsComponent,
    ArtistDetailComponent,
    PortfolioComponent
  ],
  providers: [
    ArtistService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
