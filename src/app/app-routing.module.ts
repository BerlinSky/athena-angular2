import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArtistComponent } from '../artist/artist.component';
import { ArtistDetailComponent } from '../artist-detail/artist-detail.component';
import { PortfolioComponent } from '../portfolio/Portfolio.component';
import { Page404Component } from '../page404/Page404.component';

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
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
