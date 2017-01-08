import { Component, OnInit } from '@angular/core';

import { Artist } from './artist';
import { ArtistService } from './artist.service';

@Component({
  moduleId: module.id,
  selector: 'artist-portfolio',
  templateUrl: 'portfolio.component.html'
})
export class PortfolioComponent implements OnInit {
  title = "The detail is in the html template"

  artists: Artist[] = [];

  constructor(private artistService: ArtistService) { }

  ngOnInit(): void {
    this.artistService.getArtists()
      .then(artists => this.artists = artists);
  }
}
