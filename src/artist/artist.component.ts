import { Component, OnInit } from '@angular/core';

import { Artist } from './artist';
import { ArtistService } from '../services/artist.service';

@Component({
  selector: 'artist-app',
  templateUrl: 'artist.component.html'
})
export class ArtistComponent implements OnInit {
  constructor(private artistService: ArtistService) {}

  artists: Artist[];
  artistSelected: Artist;

  getArtists(): void {
    this.artistService.getArtists()
      .then(artists => this.artists = artists);
  }

  selectArtist(artist: Artist): void {
    console.log(artist);

    this.artistSelected = artist;
  }

  ngOnInit(): void {
    this.getArtists();
  }
}
