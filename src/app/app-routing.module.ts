import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArtistComponent } from '../artist/artist.component';
import { ArtistDetailComponent } from '../artist-detail/artist-detail.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';

const routes: Routes = [
  {
    path: 'artists',
    component: ArtistComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'artist/:id',
    component: ArtistDetailComponent
  },
  {
    path: '',
    redirectTo: '/portfolio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
