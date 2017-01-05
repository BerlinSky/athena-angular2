import { Component } from '@angular/core';

import { Artist } from './artist';

// export class Artist {
//   id: number;
//   name: string;
//   webSite: string;
// }

const ARTISTS: Artist[] = [
  { id: 101, name: 'Carrie Underwood', webSite: "www.artist-site.com" },
  { id: 102, name: 'U2', webSite: "www.artist-site.com" },
  { id: 103, name: 'Taylor Swift', webSite: "www.artist-site.com" },
  { id: 104, name: 'Beyonce', webSite: "www.artist-site.com" },
  { id: 105, name: 'Adele', webSite: "www.artist-site.com" },
  { id: 106, name: 'Justin Bieber', webSite: "www.artist-site.com" },
  { id: 107, name: 'Jennifer Lopez', webSite: "www.artist-site.com" },
  { id: 108, name: 'Lady Gaga', webSite: "www.artist-site.com" },
  { id: 109, name: 'Katy Perry', webSite: "www.artist-site.com" },
  { id: 110, name: 'Madonna', webSite: "www.artist-site.com" }
];

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
})
export class AppComponent  {
  title = 'New Artist Site';

  artists = ARTISTS;
  artistSelected: Artist;

  selectArtist(artist: Artist): void {
    console.log(artist);

    this.artistSelected = artist;
  }

  artist: Artist = {
    id: 101,
    name: "Tokyo Night",
    webSite: "www.tokyonight.com"
  }
}
