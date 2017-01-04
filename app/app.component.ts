import { Component } from '@angular/core';

export class Artist {
  id: number;
  name: string;
  webSite: string;
}

@Component({
  selector: 'artist-app',
  template: `
    <h1>Welcome to {{ title }}</h1>
    <h3>Site Link: {{ artist.webSite }}</h3>
    <div>
      <span>Artist: </span>{{ artist.name }}
    </div>
    <div>
      <div>
        <label>Web Site: </label>
      </div>
      <div>
        <input [(ngModel)]="artist.webSite" placeholder="webSite">
      </div>
    </div>
  `,
})
export class AppComponent  {
  title = 'New Artist Site';

  artist: Artist = {
    id: 101,
    name: "Tokyo Night",
    webSite: "www.tokyonight.com"
  }
}
