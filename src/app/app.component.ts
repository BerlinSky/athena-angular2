import { Component } from '@angular/core';

import { Artist } from '../artist/artist';

import '../sass/styles.scss';

@Component({
  selector: 'artist-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Artist Sites';

  artists: Artist[];

  artist: Artist = {
    id: 101,
    name: "Tokyo Night",
    webSite: "www.tokyonight.com"
  }
}


