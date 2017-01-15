import { Component, OnInit } from '@angular/core';

import { Artist } from '../artist/artist';
import { ArtistService } from '../services/artist.service';

@Component({
  selector: 'artist-portfolio',
  templateUrl: './portfolio.component.html'
})
export class PortfolioComponent implements OnInit {
  constructor(private artistService: ArtistService) { }

  title = "Artist Portfolio"

  artists: Artist[] = [];

  ngOnInit(): void {
    this.artistService.getArtists()
      .then(artists => this.artists = artists);
  }
}
