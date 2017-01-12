import { Component } from '@angular/core';
import '../../public/css/styles.css';

export class Artist {
  id: number;
  name: string;
  webSite: string;
}

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
  selector: 'artist-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Artist Sites';

  artists = ARTISTS;
  artistSelected: Artist;

  selectArtist(artist: Artist): void {
    console.log(artist);

    this.artistSelected = artist;
  }
}
