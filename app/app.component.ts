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
  selector: 'artist-app',
  template: `
    <h1>Welcome to {{ title }}</h1>
    <h3>Site Link: {{ artist.webSite }}</h3>
    <div class="artist">
      Artist: <span>{{ artist.name }}</span>
    </div>
    <div class="artist">
        Web Site:
        <input [(ngModel)]="artist.webSite" placeholder="webSite">
    </div>

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
export class AppComponent implements OnInit {
  constructor(private artistService: ArtistService) { }

  title = 'New Artist Site';

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

  artist: Artist = {
    id: 101,
    name: "Tokyo Night",
    webSite: "www.tokyonight.com"
  }

}
