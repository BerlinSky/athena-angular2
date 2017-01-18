import { Component, OnInit } from '@angular/core';

import { Artist } from '../artist/artist';
import { ArtistService } from '../services/artist.service';

import '../sass/styles.scss';

@Component({
  selector: 'artist-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ArtistService]
})
export class AppComponent implements OnInit {
  constructor(private artistService: ArtistService) {}

  title = 'A Site for Artists';

  // artists = ARTISTS;
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
