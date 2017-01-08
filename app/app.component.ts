import { Component, OnInit } from '@angular/core';

import { Artist } from './artist';

@Component({
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
  `,
})
export class AppComponent {
  title = 'New Artist Site';

  artist: Artist = {
    id: 101,
    name: "Tokyo Night",
    webSite: "www.tokyonight.com"
  }
}
