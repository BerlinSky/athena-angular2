import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Artist } from './artist';
import { ArtistService } from '../services/artist.service';

// import '../../public/css/styles.scss';
// import '../sass/styles.scss';

@Component({
  selector: 'artist-app',
  templateUrl: './artist.component.html',
  // styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  constructor(
    private artistService: ArtistService,
    private router: Router
  ) {}

  title = 'Artist Sites';

  // artists = ARTISTS;
  artists: Artist[];
  artistSelected: Artist;

  getArtists(): void {
    this.artistService.getArtists()
      .then(artists => this.artists = artists);
  }

  addArtist(name: string): void {
    name = name.trim();
    if (!name) { return; }

    this.artistService.createArtist(name)
      .then(artist => {
        this.artists.push(artist);
        this.artistSelected = null;
      });
  }

  selectArtist(artist: Artist): void {
    console.log(artist);

    this.artistSelected = artist;
  }

  displayArtistInfo(): void {
    this.router.navigate(['/artist', this.artistSelected.id]);
  }

  ngOnInit(): void {
    this.getArtists();
  }
}
