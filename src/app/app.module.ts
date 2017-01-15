import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ArtistComponent } from '../artist/artist.component';
import { ArtistDetailComponent } from '../artist-detail/artist-detail.component';
import { PortfolioComponent } from '../portfolio/Portfolio.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'artists',
        component: ArtistComponent
      },
      {
        path: 'portfolio',
        component: PortfolioComponent
      },
      // {
      //   path: '',
      //   redirectTo: '/portfolio',
      //   pathMatch: 'full'
      // },
    ])
  ],
  declarations: [
    AppComponent,
    ArtistComponent,
    ArtistDetailComponent,
    PortfolioComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }



