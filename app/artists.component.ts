import { Component, OnInit } from '@angular/core';

import { Artist } from './artist';
import { ArtistService } from './artist.service';

@Component({
  styles: [`
    ul.siteList {
      color: #737E86;
    }
    .siteList > li {
      margin-bottom: 10px;
      position: relative;
      list-style: none;
      padding-left: 20px;
      margin-left: 0;
    }
     .siteList li.selected {
      color: tomato;
    }
  `],
  selector: 'artists',
  template: `
    <ul class="siteList">
      <li *ngFor="let artist of artists"
        [class.selected]="artist === artistSelected"
        (click)="selectArtist(artist)">
        <span>
          {{ artist.id }}
        </span>
          {{ artist.name }}
      </li>
    </ul>

    <artist-detail [artist]="artistSelected"></artist-detail>
  `,
  providers: [ArtistService]
})
export class ArtistsComponent implements OnInit {
  constructor(private artistService: ArtistService) { }

  // artists = ARTISTS;
  artists: Artist[];
  artistSelected: Artist;

  getArtists(): void {
    this.artistService.getArtists()
      .then(artists => this.artists = artists);
  }

  selectArtist(artist: Artist): void {
    // console.log(artist);

    this.artistSelected = artist;
  }

  ngOnInit(): void {
    this.getArtists();
  }
}
